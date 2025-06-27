


// alert("Not compatible for mini devices and Phone  Updated version comming soon.");
{


    let hireButton = document.getElementsByClassName("Hire-btn")[0];
    let displayme = document.getElementsByClassName("btn-fnc")[0];
    let querybtn = document.getElementsByClassName("sendQuery");
    
    // displayme.style.opacity = "0";
    
    displayme.style.display = "none";
    isdisplay = false;
    
    
    hireButton.addEventListener('click', () => {
        console.log("button is clicked");
        
        // if (displayme.style.opacity === '0') {
        //     displayme.style.opacity = '1'; // Make it visible only if it's hidden
        //     displayme.style.transition = "opacity 1s ease";
            
        // }
    
        if(displayme.style.display === 'none' && isdisplay == false){
            isdisplay = true;
            displayme.style.display = 'flex';          
        }
        else{
            displayme.style.display = 'none';
            isdisplay = false;
        }
        
    });
    
    document.querySelector(".resume").addEventListener('click', function() {
        // Create an invisible anchor tag to trigger the download
        var a = document.createElement('a');
        a.href = 'https://drive.google.com/file/d/1QIRwU8PjZKHUPFYR7Oxy0g4gJz2rlAsq/view?usp=sharing';  // Replace with the correct file path
        a.download = 'Resume.pdf';           // Optional: specify the download filename
        a.style.display = 'none';            // Hide the link
        document.body.appendChild(a);
        
        // Trigger the download
        a.click();
        
        // Remove the link after the download
        document.body.removeChild(a);
      });
    
      let success = document.getElementById("check");
      let Pop = document.getElementById("pop-up");
    
      success.style.opacity="0";
      Pop.style.opacity="0";
    
      function visible(){
    
        success.style.opacity="1";
        Pop.style.opacity="1";
    
      }
    
    
    
    let nameErr = document.getElementById('name-error');
    nameErr.style.opacity = "0";
    
    let name2Err = document.getElementById('name2-error');
    name2Err.style.opacity = "0";
    
    let emailErr = document.getElementById('email-error');
    emailErr.style.opacity = "0";
    
    let subErr = document.getElementById('subject-error');
    subErr.style.opacity = "0";
    
    let msgErr = document.getElementById('message-error');
    msgErr.style.opacity = "0";
    
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let fullName = ` ${firstName} + ${lastName}`;
    console.log(fullName);
    
    issuccesfull = false;
    
    function sendMail(event){
         event.preventDefault();  // Prevent form submission (page reload)
    
        let params = {
            name : document.getElementById("firstname").value,
            lastName : document.getElementById("lastname").value,
            email : document.getElementById("Emailme").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value,
        }
    
        // Reset error messages visibility
        nameErr.style.opacity = "0";
        name2Err.style.opacity = "0";
        emailErr.style.opacity = "0";
        subErr.style.opacity = "0";
        msgErr.style.opacity = "0";
    
        let isValid = true; // A flag to check if all fields are valid
    
        // Check if any field is empty or invalid, and show corresponding error messages
        if(params.name === ''){
            nameErr.style.opacity = "1";  // Show the error for Name
            isValid = false;  // Set the flag to false since there is an error
        }
    
        if(params.lastName === ''){
            name2Err.style.opacity = "1";  // Show the error for Last Name
            isValid = false;  // Set the flag to false since there is an error
        }
    
        if(params.email === ''){
            emailErr.style.opacity = "1";  // Show the error for Email
            isValid = false;  // Set the flag to false since there is an error
        }
        else if(params.email.length < 11 || !params.email.endsWith("@gmail.com") || !params.email.includes('@')){
            emailErr.textContent = "Please enter valid email id";
            emailErr.style.opacity = "1";  // Show the email error message if invalid email
            isValid = false;  // Set the flag to false since there is an error
        }
    
        if(params.subject === ''){
            subErr.style.opacity = "1";  // Show the error for Subject
            isValid = false;  // Set the flag to false since there is an error
        }
    
        if(params.message === ''){
            msgErr.style.opacity = "1";  // Show the error for Message
            isValid = false;  // Set the flag to false since there is an error
        }
    
        // If all fields are valid, send the email and reset the form
        if(isValid){
            // Clear error messages first
            nameErr.style.opacity = "0"; 
            name2Err.style.opacity = "0"; 
            emailErr.style.opacity = "0";
            subErr.style.opacity = "0"; 
            msgErr.style.opacity = "0";
    
            // Send the email
            emailjs.send("service_zj8mpf8", "template_1muh76h", params).then(visible());
    
            // Clear the input fields after successful submission
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("Emailme").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        }
    }
    
    
    issuccesfull = true;
    
    
    
    
    
    let Line = document.getElementById("Threeline");
    let header = document.querySelector("header");
    let body = document.querySelector("body");
    
    let popup = document.getElementsByClassName("popup")[0];
    
    popup.style.display = "none";
    
    let ispop = false;
    
    Line.addEventListener("click", () => {
        
        if(ispop == false){
            popup.style.display = "grid";
            ispop = true;
        }
        else{
            popup.style.display = "none";
            ispop = false;
        }
    })
    
    }
       
   

    // Dark Mode Toggle
    {
        const darkModeButton = document.getElementById('darkMode');
        let isDarkMode = false;

        const darkModeStyles = {
            backgroundColor: '#121212',
            color: '#ffffff',
            cardBorder: '2px solid #8116D9',
        };

        const lightModeStyles = {
            backgroundColor: '#ffffff',
            color: '#000000',
            cardBorder: 'none',
        };

        const body = document.body;
        const header = document.querySelector('header');
        const headerLinks = header.querySelectorAll('a');

        // Include all relevant cards including calculator-3
        const specificCards = document.querySelectorAll('#Edu1, #Edu2, #a1, #a2, #calculator, #calculator-2, #calculator-3');

        const applyTransition = (element) => {
            element.style.transition = 'background-color 0.5s ease, color 0.5s ease, border 0.5s ease';
        };

        // Apply transitions once on load
        applyTransition(body);
        applyTransition(header);
        headerLinks.forEach(applyTransition);
        specificCards.forEach(applyTransition);

        darkModeButton.addEventListener('click', () => {
            isDarkMode = !isDarkMode;

            requestAnimationFrame(() => {
                const styles = isDarkMode ? darkModeStyles : lightModeStyles;

                // Apply background and text color to body and header
                body.style.backgroundColor = styles.backgroundColor;
                body.style.color = styles.color;
                header.style.backgroundColor = styles.backgroundColor;
                header.style.color = styles.color;

                // Apply text color to all header links
                headerLinks.forEach(link => {
                    link.style.color = styles.color;
                });

                // Apply border to each specified card
                specificCards.forEach(card => {
                    card.style.border = styles.cardBorder;
                });

                // Toggle dark mode icon
                const moonIcon = document.getElementById('moon');
                moonIcon.className = isDarkMode ? 'bi bi-brightness-high-fill' : 'bi bi-moon-fill';
            });
        });
    }

    
    {
        document.addEventListener("DOMContentLoaded", () => {
            const skillList = document.querySelector("#a2 ul");
            const skillInfo = document.getElementById("skill-info");
        
            // Function to generate a random color for the pie chart
            function getRandomColor() {
                return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            }
        
            // Event listener for mouseover
            skillList.addEventListener("mouseover", (e) => {
                if (e.target.tagName === "I") {
                    const percent = e.target.parentElement.getAttribute("data-percent");
                    const pieColor = getRandomColor();
        
                    // Set the pie chart's gradient and shadow
                    skillInfo.style.background = `conic-gradient(
                        ${pieColor} 0%,
                        ${pieColor} ${percent}%,
                        lightgray ${percent}%,
                        lightgray 100%
                    )`;
        
                    // Add a shadow matching the pie color
                    skillInfo.style.boxShadow = `0px 4px 15px ${pieColor}`;
        
                    skillInfo.setAttribute("data-percent", percent);
                    skillInfo.style.display = "block";
                }
            });
        
            // Hide the pie chart on mouseout
            skillList.addEventListener("mouseout", () => {
                skillInfo.style.display = "none";
                skillInfo.style.boxShadow = "none"; // Remove the shadow when hidden
            });
        });
        
        
    }
    
    {
        // Get the modal
    var modal = document.getElementById("privacyPolicyModal");
    
    // Get the link that opens the modal
    var link = document.getElementById("privacyPolicyLink");
    
    // Get the <span> element that closes the modal
    var closeBtn = document.getElementsByClassName("close")[0];
    
    // When the user clicks the link, open the modal
    link.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    }
    
    {
        const bars = document.querySelectorAll('.bar');
        const details = document.getElementById('gpa-details');
        const showDetailsBtn = document.getElementById('show-details-btn');
        
        // Show the details section when the button is clicked
        showDetailsBtn.addEventListener('click', () => {
          details.classList.remove('hidden');
          details.innerHTML = `<p>Select a semester to see the GPA details.</p>`;
        });
        
        // Add click event to each bar to display the GPA details and calculate CGPA
        bars.forEach(bar => {
          bar.addEventListener('click', () => {
            const sem = bar.getAttribute('data-sem');
            const gpa = bar.getAttribute('data-gpa');
        
            // Handle different cases for the GPA
            if (gpa === 'Upcoming') {
              details.innerHTML = `<p><strong>${sem}:</strong> GPA not available yet (Upcoming Semester).</p>`;
            } else if (gpa === 'Ongoing') {
              details.innerHTML = `<p><strong>${sem}:</strong> GPA calculation is ongoing!</p>`;
            } else {
              // Display the selected semester's GPA
              let output = `<p><strong>${sem}:</strong> GPA is <strong>${gpa}</strong>`;
        
              // Calculate CGPA till now
              const validGPAs = Array.from(bars)
                .map(bar => parseFloat(bar.getAttribute('data-gpa')))
                .filter(value => !isNaN(value)); // Exclude 'Upcoming' and 'Ongoing'
        
              if (validGPAs.length > 0) {
                const cgpa = (validGPAs.reduce((sum, gpa) => sum + gpa, 0) / validGPAs.length).toFixed(2);
                output += ` | <strong>CGPA till now:</strong> ${cgpa}`;
              }
        
              output += `</p>`;
              details.innerHTML = output;
            }
          });
        });
        
    }
    
    {
        let contactbtn = document.getElementById('get-in-touch');
    contactbtn.addEventListener('click', (e) => {
        alert('New features will be Launched in Update MegaFolio.2.1.0');
    });
    }