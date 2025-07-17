package com.cognizant.api_gateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Configuration
public class LoggingFilter {

    private static final Logger logger = LoggerFactory.getLogger(LoggingFilter.class);

    @Bean
    public GlobalFilter logRequestFilter() {
        return (exchange, chain) -> {
            ServerWebExchange request = exchange;
            logger.info("Request: {} {}", request.getRequest().getMethod(), request.getRequest().getURI());
            return chain.filter(exchange);
        };
    }
}
