package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.cognizant.springlearn")
public class SpringlearnApplication
{
	public static void main(String[] args) {
		SpringApplication.run(SpringlearnApplication.class, args);
	}
}
