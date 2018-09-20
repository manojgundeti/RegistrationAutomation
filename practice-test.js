 xdescribe("This is title of spec Suite", function(){
    var a;
    it("This is title of spec", function(){
        a= true;
        expect(a).toBe(true);
    })

    it("This is positive case", ()=>{
        expect(a).toBe(true);
    })

    it("and can have a negative case", ()=>{
        a=false;
        expect(a).not.toBe(true);
    })
})


xdescribe("Included Matchers:", ()=>{
    it("the toBe matcher compares with ===", ()=>{
        var a=12;
        var b=a;
        expect(a).toBe(b);
        expect(b).not.toBe(null);
    });

    describe("The 'To Equal' matcher", ()=>{
        it("works for simple iterators and variables", ()=>{
            var a=12;
            expect(a).toEqual(12);
        })

        it("should work for objects", ()=>{
            var foo = {
                a: 12,
                b: 34,
            }
            var bar = {
                a: 12,
                b: 34,
            }
            expect(foo).toEqual(foo);
        })
        it("The 'ToMatch' matcher is for regular expression", ()=>{
            var message="To Match Matcher";
            expect(message).toMatch(/Match/);
            expect(message).toMatch("Match");
            expect(message).not.toMatch("Tobe");
        })

        it ("The 'toBeDefined' matcher compares against Undefined", ()=>{
            var a = {
                foo: "foo"
            };
            expect(a.foo).toBeDefined();
            expect(a.bao).not.toBeDefined();
        })

        it("The 'toBeUndefined' matcher compares against undefined",()=>{
            var a = {
                foo : "foo",
            }
            expect(a.foo).not.toBeUndefined();
            expect(a.boo).toBeUndefined();
        })

        it("The 'ToBeNull' matcher compares against null",()=>{
            var a =null;
            var foo={
                foo: 'foo',
            }
            expect(a).toBeNull();
            expect(foo.foo).not.toBeNull();
        })

        it("The 'toBeTruthy' matcher is for boolean casting Testing", ()=>{
            var a, foo='foo';
            expect(foo).toBeTruthy();
            expect(a).not.toBeTruthy();
        })

        it("The 'toBeFalsy' matcher is for boolean casting Testing",()=>{
            var a, foo='foo';
            expect(foo).not.toBeFalsy();
            expect(a).toBeFalsy();
        })
    })

    describe("The 'toContain' matcher",()=>{
        it("Works for finding an item in an array", ()=>{
            var a=["foo","bar","baz"];
            expect(a).toContain("bar");
            expect(a).not.toContain("baz");

        })
        it("works for finding the substring", ()=>{
            var a="For finding substring";
            expect(a).toContain("sub");
        })
    })
    
    it("The 'toBeLesser' compares Mathematical operation", ()=>{
        var pi=3.14;
        e= 2.38;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    })
    
    it("The 'toBeCloseTO' matcher is for precision math comparision", ()=>{
        var pi = 3.141;
        e = 2.78;
        expect(pi).not.toBeCloseTo(e,2);
        expect(e).toBeCloseTo(e,0);
    })

    it("The 'toThrow' matcher is for Testing if a function throws an exception",()=>{
        var foo = ()=>{
            return 1+2;
        }
        var bar = ()=>{
            return a+1;
        }
        var baz = ()=>{
            throw 'what';
        }
        expect(foo).not.toThrow();
        expect(bar).not.toThrow();
        expect(baz).not.toThrow('what');
    })

    it("The 'toThrowError' matcher is for testing a specific thrown exception",()=>{
        var foo = () =>{
            throw new TypeError("foo bar baz");
        }

        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).not.toThrowError(TypeError, "foo bar baz");
    })
    
}); 


xdescribe("A spec", ()=>{
    it("just a function it contains any code", ()=>{
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    })

    it("can have more than one expectation", ()=>{
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toBe(true);
    })
})


xdescribe("A spec (with setup and tear-down)", ()=>{
    var foo=0;
    beforeEach(()=>{
        //foo=0;
        foo+=1;
    })

    afterEach(()=>{
        foo=1;
    })

    it("is just a function it contain any code",()=>{
        expect(foo).toEqual(1);
    })

    it("can have more than one expectation",()=>{
        expect(foo).toEqual(1);
        expect(true).toBe(true);
    })
})

xdescribe("A spec",()=>{
    beforeEach(()=>{
        this.foo=0;
    })

    it("can use `this` to share state",()=>{
        expect(this.foo).toEqual(0);
        this.bar ="test";
    })

    it("prevents test pollution by having an empty `this` created for the next spec",()=>{
        expect(this.foo).toEqual(0);
        expect(bar).not.toBe(undefined);
    })
}) 

xdescribe(" a spec", ()=>{
    var foo;

    beforeEach(()=>{
        foo=0;
        foo+=1;
    })

    afterEach(()=>{
        foo=0;
    })

    it("is just a function, so it can contain any code",()=>{
        expect(foo).toEqual(1);
    })

    it("can have more than one expectation", ()=>{
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    })

    xdescribe("nested inside a second describe", ()=>{
        var bar;

        beforeEach(()=>{
            bar = 1;
        })
        it("can ref both scopes as needed",()=>{
            expect(foo).toEqual(bar+1);
        })
    })
})

describe("pending specs", ()=>{

    xit("can be declared with xit", ()=>{
        expect(true).toBe(false);
    })

    it("can be declared with `it` but not function");

    it("can be declared by calling 'pending' in the spec body", function(){
        //pending();
        expect(true).toBe(true);
    })
})

