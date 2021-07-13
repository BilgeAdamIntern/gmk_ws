package com.hoaxify.ws.user;

import com.hoaxify.ws.error.NotFoundException;
import com.hoaxify.ws.user.vm.UserUpdateVM;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public Page<User> getUsers(Pageable page, User user) {
        if(user != null) {
            return userRepository.findByUsernameNot(user.getUsername(), page);
        }
        return userRepository.findAll(page);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user= Optional.ofNullable(userRepository.findByUsername(username));
        user.orElseThrow(() -> new UsernameNotFoundException("Not found"));
        UserDetails details = user.map(CustomUserDetails::new).get();
        return details;
    }

    public User getByUsername(String username) {
        User inDB = userRepository.findByUsername(username);
        if(inDB == null) {
            throw new NotFoundException();
        }
        return inDB;
    }

    public User updateUser(String username, UserUpdateVM updatedUser) {
        User inDB = getByUsername(username);
        inDB.setUsername(updatedUser.getDisplayName());
        return userRepository.save(inDB);
    }

    public void deleteUser(String username) {
        User inDB = userRepository.findByUsername(username);
        userRepository.delete(inDB);
    }
}
