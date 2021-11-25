function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
          zoom : 15,
          center : mapLatLng
        };
        var map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );
        var marker = new google.maps.Marker({
          map : map,
          position : mapLatLng 
        });
        var infoWindow = [];
        ///吹き出しコメント
        var markerData = [ // マーカーを立てる場所名・緯度・経度
          {
            name: 'マクドナルド 代々木店<br><input type="button" value="ここに行く" onclick="root1()">',
            lat: 35.683853671563625,
            lng: 139.70126867294312,
            icon: 'PayMet.png'
          }, {
            name: 'タリーズコーヒー 新宿コクーンタワー店<br><input type="button" value="ここに行く" onclick="root2()">',
            lat: 35.691713740776834,
            lng: 139.69724535942078
          }
        ];
        for (var i = 0; i < markerData.length; i++) {
          markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
          marker[i] = new google.maps.Marker({ // マーカーの追加
          position: markerLatLng, // マーカーを立てる位置を指定
          map: map // マーカーを立てる地図を指定
          });

          infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
          content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
          });

          markerEvent(i); // マーカーにクリックイベントを追加
        }
        // マーカーにクリックイベントを追加
        function markerEvent(i) {
          marker[i].addListener('click', function() { // マーカーをクリックしたとき
            infoWindow[i].open(map, marker[i]); // 吹き出しの表示
          });
        }
      },
      function(error) {
        switch(error.code) {
          case 1:
            alert("位置情報の利用が許可されていません");
            break;
          case 2:
            alert("現在位置が取得できませんでした");
            break;
          case 3:
            alert("タイムアウトになりました");
            break;
          default:
            alert("その他のエラー(エラーコード:"+error.code+")");
            break;
        }
      }
    );
  } else {
    alert("この端末では位置情報が取得できません");
  }
}

function root1() {
    // Geolocation APIに対応している
    if (navigator.geolocation) {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        function(position) {
          // 緯度・経度を変数に格納
          var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          // マップオプションを変数に格納
          var mapOptions = {
            zoom : 15,          // 拡大倍率
            center : mapLatLng  // 緯度・経度
          };
          // マップオブジェクト作成
          var map = new google.maps.Map(
            document.getElementById("map"), // マップを表示する要素
            mapOptions         // マップオプション
          );
          //　マップにマーカーを表示する
          var marker = new google.maps.Marker({
            map : map,             // 対象の地図オブジェクト
            position : mapLatLng   // 緯度・経度
          });
          // ルート検索の条件
          var request = {
            origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),  // 出発地
            destination: new google.maps.LatLng(35.683853671563625,139.70126867294312), // 目的地
            travelMode: google.maps.DirectionsTravelMode.WALKING, // 交通手段
             };
          // マップの生成
          var map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(35.681382,139.766084), // マップの中心
            zoom: 7 // ズームレベル
            });

          var d = new google.maps.DirectionsService(); // ルート検索オブジェクト
          var r = new google.maps.DirectionsRenderer({ // ルート描画オブジェクト
            map: map, // 描画先の地図
            preserveViewport: true, // 描画後に中心点をずらさない
            });
            // ルート検索
            d.route(request, function(result, status){
            // OKの場合ルート描画
            if (status == google.maps.DirectionsStatus.OK) {
            r.setDirections(result);
            }
            });
        },
      );
    } else {
      alert("この端末では位置情報が取得できません");
    }
}

function root2() {
    // Geolocation APIに対応している
    if (navigator.geolocation) {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        function(position) {
          // 緯度・経度を変数に格納
          var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          // マップオプションを変数に格納
          var mapOptions = {
            zoom : 15,          // 拡大倍率
            center : mapLatLng  // 緯度・経度
          };
          // マップオブジェクト作成
          var map = new google.maps.Map(
            document.getElementById("map"), // マップを表示する要素
            mapOptions         // マップオプション
          );
          //　マップにマーカーを表示する
          var marker = new google.maps.Marker({
            map : map,             // 対象の地図オブジェクト
            position : mapLatLng   // 緯度・経度
          });
          // ルート検索の条件
          var request = {
            origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),  // 出発地
            destination: new google.maps.LatLng(35.691713740776834,139.69724535942078), // 目的地
            travelMode: google.maps.DirectionsTravelMode.WALKING, // 交通手段
             };
          // マップの生成
          var map = new google.maps.Map(document.getElementById("map"), {
            center: mapLatLng, // マップの中心
            zoom: 15 // ズームレベル
            });

          var d = new google.maps.DirectionsService(); // ルート検索オブジェクト
          var r = new google.maps.DirectionsRenderer({ // ルート描画オブジェクト
            map: map, // 描画先の地図
            preserveViewport: true, // 描画後に中心点をずらさない
            });
            // ルート検索
            d.route(request, function(result, status){
            // OKの場合ルート描画
            if (status == google.maps.DirectionsStatus.OK) {
            r.setDirections(result);
            }
            });
        },
      );
    } else {
      alert("この端末では位置情報が取得できません");
    }
}