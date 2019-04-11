
function handler (done) {
  validateParams((err) => {

    if (err) return done(err)
    dbQuery((err, dbResults) => {
      if (err) return done(err)
      serviceCall((err, serviceResults) => {
        done(err, { dbResults, serviceResults })
      })
    })

  })
}


function handler (done) {
  let serviceResults;
  return validateParams(err)
  .then(
    serviceResults = serviceCall( dbQuery() )
  )
  .catch(err) => handleError(err)
  .done(serviceResults);
}




async function handler() {
  await validateParams()
  .then(
    done(
      (dbQuery(dbResults)),
      (serviceCall(serviceResults))
    ))
  .catch(err => );
}



function handler() {
  return validateParams()
    .then(dbQuery)
    .then(serviceCall)
    .then(result => {
      console.log(result);
      return result;
    });
}
最近，JavaScript 開始支援了 非同步函式。現在可以用與同步程式碼非常相似的方式編寫上述非同步程式碼：

async function handler() {
  await validateParams();
  const dbResults = await dbQuery();
  const results = await serviceCall(dbResults);
  return results;
}
