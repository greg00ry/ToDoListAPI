import * as fs from "fs"

function processPropsForTemplates(propsForTemplate, template) {
    if (!propsForTemplate) return template

    for (let [key, value] of Object.entries(propsForTemplate)) {
        key = `{{${key}}}`
        template = template.replaceAll(key, value)
    }

    return template
}

export function render (path, res, propsForTemplate) {
    try {
        const data = fs.readFileSync(path, "utf8")

        const modifiedTemplate = processPropsForTemplates(propsForTemplate, data)

        res.write(modifiedTemplate)
    } catch (err) {
        res.writeHead(404)
        res.write("File not found")
    }
}

export function tasksListHtml (tasks) {
    if ( !tasks ) {
        return "Error: No taks for template"
    }

    let html = ""

    for (const task of tasks) {
        console.log(task.title)
        html += task.title + "<br>" 
    }

    return html
}