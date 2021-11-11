package com.roytuts.spring.boot.react.crud.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roytuts.spring.boot.react.crud.api.model.Website;
import com.roytuts.spring.boot.react.crud.api.repository.WebsiteRepository;

@Service
public class WebsiteService {

	@Autowired
	private WebsiteRepository websiteRepository;

	public List<Website> getWebsites() {
		System.out.println("Total Websites: " + websiteRepository.findAll().size());
		return websiteRepository.findAll();
	}

	public Website getWebsite(final Integer id) {
		if (id == null || id == 0) {
			throw new RuntimeException("You must provide valid website id");
		}
		Website website = websiteRepository.findById(id);
		if (website == null) {
			throw new RuntimeException("Website detail not found for the given id => " + id);
		} else {
			return website;
		}
	}

	public void deleteWebsite(final Integer id) {
		if (id == null || id == 0) {
			throw new RuntimeException("You must provide valid website id");
		}
		try {
			websiteRepository.delete(id);
		} catch (Exception e) {
			throw new RuntimeException("Website detail not found for the given id => " + id);
		}
	}

	public void saveWebsite(final Website website) {
		if (website == null || (website.getTitle() == null && website.getUrl() == null)) {
			throw new RuntimeException("You must provide Website details");
		}
		try {
			websiteRepository.add(website);
		} catch (Exception e) {
			throw new RuntimeException("Error occurred during website details saving");
		}
	}

	public void updateWebsite(final Website website) {
		if (website == null || ((website.getId() == null || website.getId() == 0) && website.getTitle() == null
				&& website.getUrl() == null)) {
			throw new RuntimeException("You must provide Website details");
		}
		try {
			websiteRepository.update(website);
		} catch (Exception e) {
			throw new RuntimeException("Error occurred during website details updating");
		}
	}

}
