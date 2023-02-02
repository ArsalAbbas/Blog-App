$(window).ready(() => {
    axios.get("http://localhost:3000/getblog").then((response)=>{
                    console.log(response.data);
                    let output=``;
                    for(let i=0; i<response.data.length; i++)
                    {
                        output+=`<div class="container list">
                        <div class="image">
                            <img src="logo.png" alt="">
                        </div>
                        <div class="brief"><br><br>
                        <center><e><b> "${response.data[i].title}" </b></e></center> -by ${response.data[i].username}
                        <br><br>
                        ${response.data[i].content}
                        </div>
                    </div>`
                    }
                    $("#bloglist").html(output);
                    console.log(output);
                }).catch((err)=>{
                    console.log(err);
                    alert("Error !!!");
                });
    
    
            });