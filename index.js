import assert from 'assert'

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

{
    const limitTimeout = 1
    assert.rejects(async () => {
        const signal = AbortSignal.timeout(limitTimeout)
        
        await fetch(URL, { signal })

    }, {
        message: 'The operation was aborted',
        name: 'AbortError'
    })
}


{
    const limitTimeout = 500
    const signal = AbortSignal.timeout(limitTimeout)

    const response = await fetch(URL, { signal })

    const expected = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

    assert.deepStrictEqual(await response.json(), expected)
}



//constroller.abort();


/*
function factory(res, time){
    return new Promise( async function(resolve,error){
        await setTimeout(time)
        resolve(res)
    })
}

{
    const promises = [
        factory('primeira promisse', 2000),
        factory('segunda  promisse', 1000),
    ]


    const ret = await Promise.race(promises)

    console.log('retorno promise.race', ret)
}


{
    const signal = AbortSignal.timeout(1000)

    const promises = [
        factory('primeira promisse', 2000),
        factory('segunda  promisse', 1000),
    ]

    console.log('retorno abort api')
}
*/



