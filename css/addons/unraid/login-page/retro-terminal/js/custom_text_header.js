
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
 _       __ ______ __    ______ ____   __  ___ ______   ______ ____     ____   ___ __  __ _  _____    _    __ ___    __  __ __   ______
| |     / // ____// /   / ____// __ \ /  |/  // ____/  /_  __// __ \   / __ \ /   |\ \/ /( )/ ___/   | |  / //   |  / / / // /  /_  __/
| | /| / // __/  / /   / /    / / / // /|_/ // __/      / /  / / / /  / /_/ // /| | \  / |/ \__ \    | | / // /| | / / / // /    / /   
| |/ |/ // /___ / /___/ /___ / /_/ // /  / // /___     / /  / /_/ /  / _, _// ___ | / /    ___/ /    | |/ // ___ |/ /_/ // /___ / /    
|__/|__//_____//_____/\____/ \____//_/  /_//_____/    /_/   \____/  /_/ |_|/_/  |_|/_/    /____/     |___//_/  |_|\____//_____//_/     
                                                                                                                                       
                                                                      
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
