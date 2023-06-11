const fs = require('fs/promises');

const main = async () => {
    const contractsPath = [
        {
            name: "ETHPragueMap",
            path: "Map.sol/ETHPragueMap.json"
        },
        {
            name: "POAPScoreLocationVerifier",
            path: "POAPScoreLocationVerifier.sol/POAPScoreLocationVerifier.json",
        }]

    for (let index = 0; index < contractsPath.length; index++) {
        const path = contractsPath[index].path
        const name = contractsPath[index].name

        const abi = await fs.readFile(__dirname + "/out/" + path, "utf8").then(JSON.parse).then((json) => json.abi)

        await fs.writeFile(__dirname + "/../abis/" + name + ".abi.json", JSON.stringify(abi, null, 2), "utf8")
    }


}

main()