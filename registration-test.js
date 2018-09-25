

describe('registration Page test suite',()=>{
    beforeEach(()=>{
        browser.get("http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register");
        //browser.driver.manage().window.maximize();
           
    })
    /* it("should be open registration page",()=>{
        browser.get("http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register");
        var ele = element(by.xpath("//h2"));
        expect(ele.getText()).toEqual("Register");
    }) */

    it("should be succesfull register", ()=>{
        element(by.id('firstName')).sendKeys('Manoj');
        element(by.id("Text1")).sendKeys("kumar");
        element(by.id("username")).sendKeys("manoj");
        element(by.id("password")).sendKeys("password");
        element(by.xpath("//button[@type='submit']")).click();
        var suc=element(by.xpath("//div[@class='ng-binding ng-scope alert alert-success']"));
        expect(suc.getText()).toBe("Registration successful");
        
    })
    
    it("should not be get be able enable Register button",()=>{
        element(by.id('firstName')).sendKeys('Manoj');
        element(by.id("Text1")).sendKeys("kumar");
        element(by.id("username")).sendKeys("manoj");
         var disable= element(by.xpath("//button[@type='submit']")).getAttribute('disabled');
         //console.log(disable);

        expect(disable).toBe('true');

    })

    it("should be able click cancel button", ()=>{
        element(by.xpath("//a[@class='btn btn-link']")).click();
        expect(element(by.xpath("//h2")).getText()).toEqual("Login");
    })

    it("should be able to verify the inline validation", ()=>{
        element(by.id('firstName')).sendKeys('Manoj');
        element(by.id('firstName')).clear();
        expect(element(by.xpath("//span[@ng-show='form.firstName.$dirty && form.firstName.$error.required']")).getText()).toEqual('First name is required');
    })

    fit("should be able to verify the globalQA link",async ()=>{
        browser.waitForAngularEnabled(false);
        element(by.xpath("//a[@href='http://GlobalSQA.com']")).click();
        var urlCurrent=await browser.getCurrentUrl();
        expect(urlCurrent).toEqual("http://www.globalsqa.com/");
       /*  var urlCurrent = browser.getCurrentUrl().then(function(urlCurrent){
        //console.log(urlCurrent);
            expect(urlCurrent).toEqual("http://www.globalsqa.com/");
        });
         *///expect(element(by.xpath("//div[@class='sixteen columns']")).getAttribute('class')).toEqual('sixteen columns');
    })
})