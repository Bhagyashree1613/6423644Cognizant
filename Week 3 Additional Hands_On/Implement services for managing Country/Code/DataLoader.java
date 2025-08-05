package com.example.countryservice.loader;

import com.example.countryservice.model.Country;
import com.example.countryservice.repository.CountryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final CountryRepository repository;

    public DataLoader(CountryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.deleteAll();

        repository.save(new Country("IN", "India"));
        repository.save(new Country("US", "United States"));
        repository.save(new Country("FR", "France"));
        // Add more or import from SQL as needed
    }
}
