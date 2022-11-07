// creating H1 Element

const h1Ele = document.createElement("h1");

document.body.style.textAlign = "center";

document.body.append(h1Ele);

// without using setintervel
setTimeout(() => {
  h1Ele.innerText = 10;
  h1Ele.style.color = "blue";
  setTimeout(() => {
    h1Ele.innerText = 9;
    h1Ele.style.color = "red";
    setTimeout(() => {
      h1Ele.innerText = 8;
      h1Ele.style.color = "blue";
      setTimeout(() => {
        h1Ele.innerText = 7;
        h1Ele.style.color = "red";
        setTimeout(() => {
          h1Ele.innerText = 6;
          h1Ele.style.color = "blue";
          setTimeout(() => {
            h1Ele.innerText = 5;
            h1Ele.style.color = "red";
            setTimeout(() => {
              h1Ele.innerText = 4;
              h1Ele.style.color = "blue";
              setTimeout(() => {
                h1Ele.innerText = 3;
                h1Ele.style.color = "red";
                setTimeout(() => {
                  h1Ele.innerText = 2;
                  h1Ele.style.color = "blue";
                  setTimeout(() => {
                    h1Ele.innerText = 1;
                    h1Ele.style.color = "red";
                    setTimeout(() => {
                      h1Ele.innerText = "HAPPY INDEPENDENCE DAY";
                      h1Ele.style.color = "maroon";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
