
let ob = {
    mountain: ["Evereset", "Swiss Alp", "RockyMountain"],

    mountainDetail: function()
    {
        setTimeout(() => console.log(this.mountain.join('~')),300)
    }
    
}

ob.mountainDetail()