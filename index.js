let ar_this = {
    mountain: ["Everest","Swiss Alp", "NandaDevi","Annapurna"],
    ar_print: function()
    {
        setTimeout(()=>console.log(this.mountain.join('-')),3000);
    }
};

ar_this.ar_this()
