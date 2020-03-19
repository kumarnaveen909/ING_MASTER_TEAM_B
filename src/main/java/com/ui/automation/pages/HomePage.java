package com.ui.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage {
	
	public static WebDriver driver;
	
	public HomePage(WebDriver driver) {
		
	}

	@FindBy(xpath="//a[text()='All Categories']")
	public WebElement allCatagory;
	
	@FindBy(xpath="//a[text()='OFFERS']")
	public WebElement offers;
	
	@FindBy(xpath="//a[text()=' Health & Safety']")
	public WebElement HealthAndSafety;
	
	public void click_on_homepage(){
		allCatagory.click();
	 	System.out.println("Successfully clicked on All Catagory button");
	}
	public void click_on_offers(){
	 
		offers.click();
		System.out.println("Successfully clicked on Offers button");
	}
	public void click_on_HealthAndSafety(){
		HealthAndSafety.click();
		}
	
}
