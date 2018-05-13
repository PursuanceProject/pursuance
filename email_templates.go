// Steve Phillips / elimisteve
// 2018.04.23

package main

import "text/template"

var tmplDailyDigest = template.Must(template.New("DailyDigest").Parse(`Hey there!

Here's a list of tasks assigned to you that are due soon, or past due:
{{range .Tasks}}
"{{.Title}}"
Due {{.DueDateFmt}}    Status: {{.Status}}
Pursuance: {{.PursuanceName}}
Discuss: {{.DiscussURL}}
{{end}}
`))
