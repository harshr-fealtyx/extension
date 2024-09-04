
console.log("Content script loaded.");

function queryXPath(xpath, contextNode = document) {
  const evaluator = new XPathEvaluator();
  const result = evaluator.evaluate(
    xpath,
    contextNode,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return result.singleNodeValue;
}

function dispatchInputEvent(element) {
  const event = new Event("input", { bubbles: true });
  element.dispatchEvent(event);
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function setFieldValue(selector, value, setFieldFunction) {
  const field = queryXPath(selector);
  if (field) {
    console.log(`${selector} field found.`);
    setFieldFunction(field, value);
    return true;
  }
  console.log(`${selector} field not found.`);
  return false;
}

async function clickElement(selector) {
  const element = queryXPath(selector);
  if (element) {
    console.log(`${selector} found, clicking.`);
    element.click();
    return true;
  }
  console.log(`${selector} not found.`);
  return false;
}

async function clickElementByTitle(title) {
  console.log(title);
  const element = document.querySelector(`[title='${title}]`);
  if (element) {
    console.log(`Element with title '${title}' found.`);
    element.click();
    return true;
  }
  console.log(`Element with title '${title}' not found.`);
  return false;
}

async function automate() {
  if (
    await clickElement(
      '//*[@id="react-root"]/div/div[2]/div[1]/div[2]/nav/div/div[6]/a[1]'
    )
  ) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for page transition
    if (await clickElement("/html/body/div[6]/div/button[1]")) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for elements to be interactive
      if (
        await clickElement(
          "/html/body/div[1]/div/div[2]/div[1]/main/div[2]/div/div[1]/div/div/div/div/div[2]/div[1]/div"
        )
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (
          setFieldValue(
            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[1]/div[1]/div[2]/div/input",
            "harshxfi",
            (field, value) => {
              field.value = value;
              dispatchInputEvent(field);
            }
          )
        ) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (
            setFieldValue(
              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div[1]/div[2]/div/input",
              "offer display",
              (field, value) => {
                field.value = value;
                dispatchInputEvent(field);
              }
            )
          ) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (
              setFieldValue(
                "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div[1]/div[2]/div/textarea",
                "first condition",
                (field, value) => {
                  field.value = value;
                  dispatchInputEvent(field);
                }
              )
            ) {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (
                await clickElement(
                  "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[4]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                )
              ) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (
                  await clickElement(
                    "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[4]/div/div[2]/div/div/div/button[2]"
                  )
                ) {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  if (
                    await clickElement(
                      "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button"
                    )
                  ) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (
                      await clickElement(
                        "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                      )
                    ) {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      if (
                        await clickElement(
                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div[2]/div/div/div/button[2]"
                        )
                      ) {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        if (
                          setFieldValue(
                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[2]/div[1]/div[2]/div/input",
                            "1000",
                            (field, value) => {
                              field.value = value;
                              dispatchInputEvent(field);
                            }
                          )
                        ) {
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );
                          if (
                            setFieldValue(
                              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div[1]/div[2]/div/input",
                              "41",
                              (field, value) => {
                                field.value = value;
                                dispatchInputEvent(field);
                              }
                            )
                          ) {
                            await new Promise((resolve) =>
                              setTimeout(resolve, 1000)
                            );
                            if (
                              await clickElement(
                                "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                              )
                            ) {
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              if (
                                await clickElement(
                                  "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                )
                              ) {
                                await new Promise((resolve) =>
                                  setTimeout(resolve, 1000)
                                );
                                if (
                                  await clickElement(
                                    "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div[2]/div/div/div/button[2]"
                                  )
                                ) {
                                  await new Promise((resolve) =>
                                    setTimeout(resolve, 1000)
                                  );
                                  if (
                                    await clickElement(
                                      "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                    )
                                  ) {
                                    await new Promise((resolve) =>
                                      setTimeout(resolve, 1000)
                                    );
                                    if (
                                      await clickElement(
                                        "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div/div[2]/div/div/div/button[1]"
                                      )
                                    ) {
                                      await new Promise((resolve) =>
                                        setTimeout(resolve, 1000)
                                      );
                                      if (
                                        await clickElement(
                                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                        )
                                      ) {
                                        await new Promise((resolve) =>
                                          setTimeout(resolve, 1000)
                                        );
                                        if (
                                          await clickElement(
                                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div/div[2]/div/div/div/button[4]"
                                          )
                                        ) {
                                          await new Promise((resolve) =>
                                            setTimeout(resolve, 1000)
                                          );
                                          if (
                                            await clickElement(
                                              "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                            )
                                          ) {
                                            await new Promise((resolve) =>
                                              setTimeout(resolve, 1000)
                                            );
                                            if (
                                              await clickElement(
                                                "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[1]/div[2]/div/label/div[1]"
                                              )
                                            ) {
                                              await new Promise((resolve) =>
                                                setTimeout(resolve, 3000)
                                              );
                                              if (
                                                await clickElement(
                                                  "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[2]/div/div[1]/div/div/input"
                                                )
                                              ) {
                                                await new Promise((resolve) =>
                                                  setTimeout(resolve, 3000)
                                                );
                                                
                                                // start date
                                                if (
                                                  await clickElement(
                                                    "/html/body/div[9]/div/div/div/div/div[2]/div[2]/table/tbody/tr[3]/td[4]/div"
                                                  )
                                                ) {
                                                  await new Promise((resolve) =>
                                                    setTimeout(resolve, 5000)
                                                  );
                                                  if (
                                                    await clickElement(
                                                      "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[3]/div[2]/div[1]/div/div/input"
                                                    )
                                                  ) {
                                                    await new Promise(
                                                      (resolve) =>
                                                        setTimeout(
                                                          resolve,
                                                          3000
                                                        )
                                                    );
                                                    // end date
                                                    if (
                                                      await clickElement(
                                                        "/html/body/div[9]/div/div/div/div/div[2]/div[2]/table/tbody/tr[4]/td[5]/div"
                                                      )
                                                    ) {
                                                      await new Promise(
                                                        (resolve) =>
                                                          setTimeout(
                                                            resolve,
                                                            3000
                                                          )
                                                      );
                                                      if (
                                                        await clickElement(
                                                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                                        )
                                                      ) {
                                                        await new Promise(
                                                          (resolve) =>
                                                            setTimeout(
                                                              resolve,
                                                              1000
                                                            )
                                                        );
                                                        if (
                                                          await clickElement(
                                                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div/div[2]/div/div/div/button[3]"
                                                          )
                                                        );
                                                        await new Promise(
                                                          (resolve) =>
                                                            setTimeout(
                                                              resolve,
                                                              1000
                                                            )
                                                        );
                                                        if (
                                                          await clickElement(
                                                            "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                                          )
                                                        ) {
                                                          await new Promise(
                                                            (resolve) =>
                                                              setTimeout(
                                                                resolve,
                                                                1000
                                                              )
                                                          );
                                                          if (
                                                            await clickElement(
                                                              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div/div/div/div/div/label/div/div/div[1]"
                                                            )
                                                          ) {
                                                            await new Promise(
                                                              (resolve) =>
                                                                setTimeout(
                                                                  resolve,
                                                                  1000
                                                                )
                                                            );
                                                            if (
                                                              await clickElement(
                                                                "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                                              )
                                                            ) {
                                                              // await new Promise(resolve => setTimeout(resolve, 1000));
                                                              console.log(
                                                                "automation complete"
                                                              );
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

automate();
