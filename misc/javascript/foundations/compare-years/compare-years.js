function compareYears(){
    let langs = [
        {
            name: "JavaScript", year: 1995,
        },
        {
            name: "Python", year: 1991,
        },
        {
            name: "Java", year: 1995,
        },
        {
            name: "C++", year: 1989
        }
    ];

    document.write(
        JSON.stringify(
            langs.sort((a,b) => {
                if(a.year > b.year) return 1;
                if(a.year < b.year) return -1;

                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
            }),
            null,
            2
        )
    );
}
