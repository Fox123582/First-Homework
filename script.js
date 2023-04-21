import {createColors} from "./scripts/changeBlocks.js";
const getData = async () =>{
    let res = await $.ajax({
        url: `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`,
        method: 'GET',
        success: data =>{
            return data
        },
        error: error => console.log(error)
    })
    res = JSON.parse(res)
    createColors(res)
}
getData()
