var mainContent = document.getElementById("main-content")
mainContent.style["display"] = "flex"
mainContent.style["justifyContent"] = "space-evenly"
mainContent.style["flexWrap"] = "wrap"


var year_tag
var launch_clicked = 0;
var land_clicked = 0;
var year_clicked = 0;
var launch_flag = ""
var land_flag = ""
var year_flag = ""

async function getSpacedata() {
    const response = await axios.get("https://api.spacexdata.com/v3/launches?limit=100");
    //console.log(response.data[0].launch_success)
    //console.log(response.data.length)
    for (var i = 0; i < response.data.length; i++) {
        createDatacard(response.data[i])
    }

}

async function getYeardata(tag) {
    var ab = document.getElementsByClassName('highlight_year');
    if (ab.length > 0) {
        ab[0].classList.remove('highlight_year');
    }

    tag.classList.add('highlight_year')
    var year = tag.innerHTML

    var response
    year_clicked = 1;
    year_flag = year
    //  console.log("year "+year_flag + "launch "+ launch_flag + "land "+ land_flag)
    // console.log("year_clicked "+year_clicked+"launch_clicked "+launch_clicked+"land clicked "+land_clicked)
    mainContent.innerHTML = ""
    if (!land_clicked && !launch_clicked) {
        response = await axios.get("https://api.spacexdata.com/v3/launches?limit=100&launch_year=" + year);
    } else if (!land_clicked && launch_clicked) {

        //   console.log("here launch flag"+launch_flag+"year flag "+year_flag)
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&launch_year=` + year_flag);
    } else if (land_clicked && !launch_clicked) {
        // console.log("land and year selected")

        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=` + land_flag + `&launch_year=` + year_flag);
    } else if (year_clicked && land_clicked && launch_clicked) {

        launch_flag = launch_flag.toLowerCase()
        //console.log("all filters selected")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&land_success=` + land_flag + `&launch_year=` + year_flag);
    }
    if (response.data.length == 0) {
        alert("No data with the selected filters!!")
    }
    for (var i = 0; i < response.data.length; i++) {
        createDatacard(response.data[i])
    }
}
async function getLaunchdata(tag) {
    //console.log(flag)
    var ab = document.getElementsByClassName('highlight_launch');
    if (ab.length > 0) {
        ab[0].classList.remove('highlight_launch');
    }

    tag.classList.add('highlight_launch')
    var response;
    mainContent.innerHTML = ""
    launch_clicked = 1
    var flag = tag.innerHTML
    launch_flag = flag.toLowerCase()

    //console.log("year " + year_flag + "launch " + launch_flag + "land " + land_flag)
    //console.log("year_clicked " + year_clicked + "launch_clicked " + launch_clicked + "land clicked " + land_clicked)
    if (year_clicked && !land_clicked) {
        // console.log("launch & year seected")
        //console.log("launch flag " +launch_flag +"year flag"+ year_flag)
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&launch_year=` + year_flag);
    } else if (!year_clicked && land_clicked) {

        // console.log("land and launch sleected")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&land_success=` + land_flag);
    } else if (!year_clicked && !land_clicked) {
        //console.log("launch selected")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag);
    } else if (year_clicked && land_clicked && launch_clicked) {
        //console.log("all filters selceted")

        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&land_success=` + land_flag + `&launch_year=` + year_flag);
    }
    if (response.data.length == 0) {
        alert("No data with the selected filters!!")
    }
    for (var i = 0; i < response.data.length; i++) {
        createDatacard(response.data[i])
    }
}

async function getLanddata(tag) {
    //console.log(flag)
    var response
    var ab = document.getElementsByClassName('highlight_land');
    if (ab.length > 0) {
        ab[0].classList.remove('highlight_land');
    }

    tag.classList.add('highlight_land')
    mainContent.innerHTML = ""
    var flag = tag.innerHTML
    land_clicked = 1
    land_flag = flag.toLowerCase()
    //  console.log("year " + year_flag + "launch " + launch_flag + "land " + land_flag)
    if (!launch_clicked && !year_clicked) {
        //console.log("land selected ")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=` + land_flag);
    }
    else if (!year_clicked && launch_clicked) {
        //      console.log("land and launch clicked")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&land_success=` + land_flag);
    }
    else if (year_clicked && !launch_clicked) {
        //   console.log("year and land clicked")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=` + land_flag + `&launch_year=` + year_flag);
    }
    else if (year_clicked && launch_clicked && land_clicked) {
        // console.log("all filterrs selected")
        response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=` + launch_flag + `&land_success=` + land_flag + `&launch_year=` + year_flag);
    }
    if (response.data.length == 0) {
        alert("No data with the selected filters!!")
    }

    //console.log(response.data)
    //console.log(response.data.length)
    for (var i = 0; i < response.data.length; i++) {
        createDatacard(response.data[i])
    }
}
function createDatacard(data) {
    //console.log(data)
    var div = document.createElement("div")
    var img = document.createElement("img")
    var p = document.createElement("p")
    var ul = document.createElement("ul")
    var li = document.createElement("li")
    var text = document.createElement("p")
    var ly = document.createElement("p")
    var slaunch = document.createElement("p")
    var sland = document.createElement("p")
    div.classList.add("data-card")
    img.classList.add("responsive-img")
    img.setAttribute("alt", "Flight image")
    sland.innerHTML = `<b>Successful Landing: </b>` + data["rocket"]["first_stage"]["cores"][0]["land_success"]
    slaunch.innerHTML = `<b>Successful Launch: </b>` + data["launch_success"]
    ly.innerHTML = `<b>Launch Year: </b>` + data.launch_year
    p.style["fontWeight"] = "bold"
    p.style["color"] = "blue"
    text.innerHTML = `<b>Mission Ids:</b>`;
    li.innerHTML = data["mission_ids"]
    ul.appendChild(li)
    p.innerHTML = data["mission_name"] + ` # ` + data["flight_number"]
    img.src = data["links"]["mission_patch_small"]
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(text)
    div.appendChild(ul)
    div.appendChild(ly)
    div.appendChild(slaunch)
    div.appendChild(sland)
    mainContent.appendChild(div)
}