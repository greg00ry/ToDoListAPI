import * as Task from "./models/task.model.js"
import { TaskController } from "./controllers/TaskController.js"
import { serveStaticFile, serveJsonObj, getPostData } from "./util/serverHelper.js"
import * as htmlRenderer from "./util/htmlRenderer.js"

const taskController = new TaskController()

export async function handleRequest(req, res) {
    let path = new URL(req.url, `http://${req.headers.host}`).pathname

    console.log("req.url:", req.url)
    console.log("path:", path)
    
    if (req.url === "/" && req.method === "GET") {
        const tasks = await Task.getAll()
        const props = {
            title: "Lista zadań",
            heading: "Lista zadań",
            tasksHtml: htmlRenderer.tasksListHtml(tasks)
        }

        htmlRenderer.render("./static/index.html", res, props)
        res.end()
    } else if(req.url === "/api/tasks" && req.method === "GET"){
        const tasksData = await taskController.getAll()
        serveJsonObj(res, tasksData)
    } else if(req.url.match(/\/api\/task\/([a-z0-9]+)/) && req.method === "GET") {
        const id = req.url.split("/")[3]
        const taskData = await taskController.getById(id)
        serveJsonObj(res, taskData)
    } else {
        serveStaticFile(req, res)
    }
}