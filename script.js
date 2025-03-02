function prioritizeJobs() {
    let company = document.getElementById("company").value;
    let jobTitle = document.getElementById("jobTitle").value;
    let referral = parseInt(document.getElementById("referral").value);
    let effort = parseInt(document.getElementById("effort").value);
    let stage = parseInt(document.getElementById("stage").value);

    // Calculate priority score
    let score = 10 + (referral * 3) + (stage * 5) - (effort * 2);
    let result = `${company} - ${jobTitle} (Priority Score: ${score})`;

    // Add the job to the ranked list
    let list = document.getElementById("jobList");
    let listItem = document.createElement("li");
    listItem.innerText = result;
    list.appendChild(listItem);
}
