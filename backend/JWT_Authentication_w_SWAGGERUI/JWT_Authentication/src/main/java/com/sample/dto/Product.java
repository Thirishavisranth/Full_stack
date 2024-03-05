package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {

    private int productId;
    private String name;
    private int qty;
    private double price;
}
// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//     return http.csrf(AbstractHttpConfigurer::disable)
//             .authorizeHttpRequests(requests -> requests
//                     .requestMatchers("/auth/**","/api/courses/**", "/v3/api-docs/**",
//                             "/swagger-ui.html", "/swagger-ui/**")
//                     .permitAll())
//             .authorizeHttpRequests(requests -> requests.requestMatchers("/api/courses/**","/auth/**")
//                     .authenticated())
//             .sessionManagement(management -> management
//                     .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//             .authenticationProvider(authenticationProvider())
//             .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
//             .build();
// }