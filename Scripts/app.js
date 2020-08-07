
// File name: app.js
// Author's name: Anuben Keshavala
// Web site name: Home Page 
// File Description: This file is used for Java Functionality


"use strict";

// IIFE -Immediately Invoked Function Expression
(function(){
    
    let title = document.title.toLowerCase();

    function highlightActiveLink() 
    {
        //console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

    function loadHeader()
    {
        console.info("header loading ....");
        //step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        //step 2 - configure the message
        XHR.open("Get", "./View/partials/header.html");

        //step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200)) 
            {   let header = document.getElementsByTagName("header")[0]; 

                let headerData = XHR.responseText;   
                header.innerHTML = headerData;
            }
        });
    }
    
    
    function loadParagraphDataOfHome()
    {
        console.info("ParagraphData Loading.....");

        //step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        //step 2 - configure the message
        XHR.open("Get", "./Scripts/paragraph.json");

        //step 3 - Executes the request
        XHR.send();

        //step 4 - register the readystate event
        XHR.addEventListener("readystatechange", function(){
           if((XHR.readyState === 4) && (XHR.status === 200)) 
           {
               let data = JSON.parse(XHR.responseText);
               let paragraph = data.paragraph;

               console.log(paragraph);

               document.getElementById("introduction").innerHTML = paragraph[0].introduction;
               document.getElementById("missionStatement").innerHTML = paragraph[0].missionStatement;
               document.getElementById("favouriteQuote").innerHTML = paragraph[0].favouriteQuote;
          }
        });
    }
    function loadParagraphDataOfProject()
    {
        console.info("ParagraphData Loading.....");

        //step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        //step 2 - configure the message
        XHR.open("Get", "./Scripts/paragraph.json");

        //step 3 - Executes the request
        XHR.send();

        //step 4 - register the readystate event
        XHR.addEventListener("readystatechange", function(){
           if((XHR.readyState === 4) && (XHR.status === 200)) 
           {
               let data = JSON.parse(XHR.responseText);
               let paragraph = data.paragraph;

               console.log(paragraph);

               document.getElementById("realestatePage").innerHTML = paragraph[1].realestatePage;
               document.getElementById("protectedPlanet").innerHTML = paragraph[1].protectedPlanet;
               document.getElementById("instructorevaluationForm").innerHTML = paragraph[1].instructorevaluationForm; 
           }
        });
    }
    function loadFooter()
    {
        console.info("footer loading ....");
        //step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        //step 2 - configure the message
        XHR.open("Get", "./View/partials/footer.html");

        //step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200)) 
            {   let footer = document.getElementsByTagName("footer")[0]; 

                let footerData = XHR.responseText;   
                footer.innerHTML = footerData;
            }
        });
    }
    
    // named function
    function Start()
    {
       console.log('%cApp Started...', "color:Black; font-size: 24px;");   

       let title = highlightActiveLink();

       if(title == "Home" || "Projects")
       {
           loadHeader();
           loadParagraphDataOfHome();
           loadParagraphDataOfProject();
           loadFooter();
       }
       if(title == "Contact")
       {
        loadHeader();
        loadFooter();
       }
      
    } 

    window.addEventListener("load", Start);
})();


