import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: "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"
  });

const getData = async () => {
    const result = await octokit.request('GET /repos/{owner}/{repo}/commits',{
        owner: 'SanchitYadav2005',
        repo: 'Portfolio-site'
    })
    console.log(result.data)
}

function ContributionSection(){
    return(
        <button onClick={getData}>click</button>
    )
}

export default ContributionSection;