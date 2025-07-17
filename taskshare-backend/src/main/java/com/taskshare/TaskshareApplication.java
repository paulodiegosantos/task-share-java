package com.taskshare;

import com.taskshare.model.User;
import com.taskshare.repository.UserRepository;
import com.taskshare.controller.UserController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskshareApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskshareApplication.class, args);
	}

}
