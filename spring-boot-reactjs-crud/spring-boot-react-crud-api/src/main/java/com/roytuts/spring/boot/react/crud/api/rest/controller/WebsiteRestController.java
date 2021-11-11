package com.roytuts.spring.boot.react.crud.api.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.roytuts.spring.boot.react.crud.api.model.Website;
import com.roytuts.spring.boot.react.crud.api.service.WebsiteService;

@RestController
@CrossOrigin(value = "*")
public class WebsiteRestController {

	@Autowired
	private WebsiteService websiteService;

	@GetMapping("/websites")
	public ResponseEntity<List<Website>> getWebsites() throws Exception {
		return new ResponseEntity<List<Website>>(websiteService.getWebsites(), HttpStatus.OK);
	}

	@GetMapping("/website/search/{id}")
	public ResponseEntity<Website> getWebsite(@PathVariable Integer id) throws Exception {
		return new ResponseEntity<Website>(websiteService.getWebsite(id), HttpStatus.OK);
	}

	@PostMapping("/website/add")
	public ResponseEntity<Void> saveWebsite(@RequestBody Website website) throws Exception {
		websiteService.saveWebsite(website);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PostMapping("/website/update")
	public ResponseEntity<Void> updateWebsite(@RequestBody Website website) throws Exception {
		websiteService.updateWebsite(website);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@GetMapping("/website/delete/{id}")
	public ResponseEntity<Website> deleteWebsite(@PathVariable Integer id) throws Exception {
		websiteService.deleteWebsite(id);
		return new ResponseEntity<Website>(HttpStatus.OK);
	}

}
