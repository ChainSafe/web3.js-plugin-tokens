import fs from "fs";
import path from "path";

var destination = process.argv.slice(2)[0];

const artifactContent = fs.readFileSync("./artifacts.json", "utf-8")

const artifacts: string[] = JSON.parse(artifactContent);

(async function(){
    fs.mkdirSync(destination, {recursive: true})
    for(const artifact of artifacts) {
        let abi;
        try {
            abi = (await import(artifact)).abi;
        } catch(e) {
            abi = JSON.parse(fs.readFileSync(artifact, "utf-8")).abi
        }
        const filename = path.basename(artifact, ".json")
        const file = path.join(destination, filename + ".ts")
        fs.writeFileSync(file, `const abi = ${JSON.stringify(abi).trimEnd()} as const; export default abi;`)
        console.log(`Created/updated ${file}`)
    }
})()
