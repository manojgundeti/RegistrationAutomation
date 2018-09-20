

describe('registration Page test suite',()=>{
    it("should be open registration page",()=>{
        browser.get("http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register");
        var ele = element(by.xpath("//h2"));
        expect(ele.getText()).toEqual("Register");
    })

    it("should be register", ()=>{
        element(by.id('firstName')).sendKeys('Manoj');
        element(by.id("Text1")).sendKeys("kumar");
        element(by.id("username")).sendKeys("manoj");
        element(by.id("password")).sendKeys("password");
        element(by.xpath("//button[@type='submit']")).click();
        var suc=element(by.xpath("//div[@class='ng-binding ng-scope alert alert-success']"));
        expect(suc.getText()).toBe("Registration successful");
        
    })
    
})