import fetch from 'node-fetch'

async function main() {
    const endpoint = 'http://127.0.0.1:5076'
    const from = parseInt(process.argv[2])
    const to = parseInt(process.argv[3])

    const reqs = []
    for (let i = from; i < to; i++) {
        reqs.push({
            method: 'eth_getBlockByNumber',
            params: [`0x${i.toString(16)}`, false],
            id: i-from,
            jsonrpc: '2.0',
        })
    }

    const res = await fetch(endpoint, {method: 'POST', body: JSON.stringify(reqs), headers: {'Content-Type': 'application/json'}})
    const data = await res.json()
}

main().then().catch((err) => console.log(err))
