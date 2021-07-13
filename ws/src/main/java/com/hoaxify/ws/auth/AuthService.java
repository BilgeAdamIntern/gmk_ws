package com.hoaxify.ws.auth;

import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserRepository;
import com.hoaxify.ws.user.vm.UserVM;

@Service
public class AuthService {
	
	UserRepository userRepository;
	TokenRepository tokenRepository;
	
	public AuthService(UserRepository userRepository, TokenRepository tokenRepository) {
		super();
		this.userRepository = userRepository;
		this.tokenRepository = tokenRepository;
	}

	public AuthResponse authenticate(Credentials credentials) {
		User inDB = userRepository.findByUsername(credentials.getUsername());
		if(inDB == null) {
			throw new AuthException();			
		}

		if(!(credentials.getPassword().equals(inDB.getPassword()))) {
			throw new AuthException();
		}

		UserVM userVM = new UserVM(inDB);
		String token = generateRandomToken();
		
		Token tokenEntity = new Token();
		tokenEntity.setToken(token);
		tokenEntity.setUser(inDB);
		tokenRepository.save(tokenEntity);
		AuthResponse response = new AuthResponse();
		response.setUser(userVM);
		response.setToken(token);
		return response;
	}

	@Transactional
	public User getUserDetails(String token) {
		Optional<Token> optionalToken = tokenRepository.findById(token);
		if(!optionalToken.isPresent()) {
			return null;
		}
		return optionalToken.get().getUser();
	}
	
	public String generateRandomToken() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	public void clearToken(String token) {
		tokenRepository.deleteById(token);
		
	}

}
