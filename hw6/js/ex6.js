const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
    }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
    }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }];
    
    
    var x ="<dl>", i; //initialize the var x with <dl> tag (description list)
    for (i=0; i<words.length; i++) { //for every term and definition in words
      x = x+"<strong><dt>"+words[i]["term"]+"</strong></dt>"+"<dd>"+words[i]["definition"]+"</dd>";
//term should be strong and description term (<dt>); use dd for description
    }
    x=x+"</dl>"; //add the close tag of <dl>
    document.getElementById("content").innerHTML = x;