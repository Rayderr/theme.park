
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
    ____  ___   ________ __    __________                           
   / __ )/   | / ____/ //_/   /_  __/ __ \                          
  / __  / /| |/ /   / ,<       / / / / / /                          
 / /_/ / ___ / /___/ /| |     / / / /_/ /                           
/_____/_/  |_\____/_/ |_|    /_/  \____/                            
                      ____  _____  ___ _____    _    _____   __  ____  ______
                     / __ \/   \ \/ ( ) ___/   | |  / /   | / / / / / /_  __/
                    / /_/ / /| |\  /|/\__ \    | | / / /| |/ / / / /   / /   
                   / _, _/ ___ |/ /  ___/ /    | |/ / ___ / /_/ / /___/ /    
                  /_/ |_/_/  |_/_/  /____/     |___/_/  |_\____/_____/_/     
                                                                      
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
