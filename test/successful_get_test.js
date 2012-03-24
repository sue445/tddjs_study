/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/25
 * Time: 0:06
 * To change this template use File | Settings | File Templates.
 */
function startSuccessfulGetTest(){
    var output = document.getElementById("output");

    if(!output){
        return;
    }

    function log(text){
        if(output && typeof output.innerHTML != "undefined"){
            output.innerHTML += text;
        } else{
            document.write(text);
        }
    }

    try{
        if(tddjs.ajax && tddjs.get){
            var id = new Date().getTime();

            tddjs.ajax.get("fragment.html?id=" + id, {
                success: function(xhr){
                    log(xhr.responseText);
                }
            });
        } else{
            log("Browser does not suport tddjs.ajax.get");
        }
    } catch(e){
        log("An exception occuerd: " + e.message);
    }


}