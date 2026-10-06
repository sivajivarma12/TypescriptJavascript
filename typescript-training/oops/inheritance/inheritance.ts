class GrandParent {
    private familyGP: string = "grandparent";
    public familyGP2: string = "grandparent2";
    protected familyGP3: string = "grandparent3";

    public getProperty(): void {
        console.log(`${this.familyGP}`);
        console.log(`${this.familyGP2}`);
        console.log(`${this.familyGP3}`);
    }

    private getProperty1(): void {
        console.log(`${this.familyGP}`);
        console.log(`${this.familyGP2}`);
        console.log(`${this.familyGP3}`);
    }

    protected getProperty2(): void {
        console.log(`${this.familyGP}`);
        console.log(`${this.familyGP2}`);
        console.log(`${this.familyGP3}`);
    }
}

class Parent extends GrandParent {
    private parent1: string = "parent1";
    public parent2: string = "parent2";
    protected parent3: string = "parent3";

    public getPropertypat(): void {
        console.log(`${this.parent1}`);
        console.log(`${this.parent2}`);
        console.log(`${this.parent3}`);
    }

    private getPropertypat1(): void {
        console.log(`${this.parent1}`);
        console.log(`${this.parent2}`);
        console.log(`${this.parent3}`);
    }

    protected getPropertypat2(): void {
        console.log(`${this.parent1}`);
        console.log(`${this.parent2}`);
        console.log(`${this.parent3}`);
    }

    // ✅ Public wrapper to access protected method from GrandParent
    public callGrandParentProtected(): void {
        this.getProperty2(); // calling protected method internally
    }
}

let obj1 = new Parent();
obj1.getProperty();              // ✅ Works (public in GrandParent)
obj1.getPropertypat();           // ✅ Works (public in Parent)
obj1.callGrandParentProtected(); // ✅ Works (public wrapper calls protected method)
