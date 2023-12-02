
      const urls = [
        { name: "Servidor Tv 1 =====>", url: "http://7go.xyz:8080/live/2AmUouCm/asdurioe8483/319598.ts" },
        { name: "Servidor Tv 2 =====>", url: "http://cnxmain.qualcom.life:80/6335408909/2065512/279.ts" },
        { name: "servidor Pluto Tv =====>", url: "https://i.mjh.nz/PlutoTV/60072798dcf437000755b4f3-alt.m3u8" },
        { name: "Servidor Tv 4 =====>", url: "http://hwnet.tvpn.eu:80/live/marcelo/marcelo/139.ts" },
        { name: "Servidor Tv 5 =====>", url: "http://tvget.live:80/live/epg/epg/239587.m3u8" },
		{ name: "Servidor Fimes direto 1 =====>", url: "http://7go.xyz:8080/live/2AmUouCm/asdurioe8483/319598.ts" },
      ];

      function checkURLs() {
        urls.forEach(url => {
          fetch(url.url)
            .then(response => {
              if (response.ok) {
                const listItem = document.createElement("li");
                listItem.textContent = `${url.name}  (Online)`;
                document.getElementById("urlList").appendChild(listItem);
	            document.getElementById("urlList").style.color = 'yellow';
              } else {
                const listItem = document.createElement("li");
                listItem.textContent = `${url.name}   (Offline)`;
                document.getElementById("urlList").appendChild(listItem);
				document.getElementById("urlList").style.color = 'blue';
              }
            })
            .catch(error => {
              const listItem = document.createElement("li");
              listItem.textContent = `${url.name}  (Offline)`;
              document.getElementById("urlList").appendChild(listItem);
			  document.getElementById("urlList").style.color = 'orange';
            });
        });
      }

      checkURLs();
	  
