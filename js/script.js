/*スマホ用*/
$(function (){
	if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		$('#sp-area').css('display', 'none');
	}else{
		$('#sp-area').css('display', 'block');
	}
});

/*ブラウザ判定*/
$(function (){
	var userAgent = window.navigator.userAgent.toLowerCase();

	if (userAgent.match('msie') || userAgent.match('trident')){
		$('#ie').show();
	}
});

//一般
$(function (){
	$('.nav-icon').on('mouseenter', function(){
		$(this).closest('li').find('span').fadeIn(1000);
	})
	.on('mouseleave', function(){
		$(this).closest('li').find('span').fadeOut(500);
	});
	$('.fa-facebook-square').on('mouseenter', function(){
		$('.select-facebook').fadeIn(300);
	})
	.on('mouseleave', function(){
		$('.select-facebook').fadeOut(300).css('display', 'none');
	});
	$('.fa-instagram').on('mouseenter', function(){
		$('.select-insta').fadeIn(300);
	})
	.on('mouseleave', function(){
		$('.select-insta').fadeOut(300).css('display', 'none');
	});
	$('.fa-desktop').on('mouseenter', function(){
		$('.select-pc').fadeIn(300);
	})
	.on('mouseleave', function(){
		$('.select-pc').fadeOut(300).css('display', 'none');
	});
})

//LE算出
$(function (){

	var q1, q2_1, q2_2, q2_3, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20_1, q20_2;
	var myNow, myBirth, myMsec, myDay, myLast, LEnow, myBirth2, targetdate, targetdate2, myOld;
	var myBirth3, totalMsec, totalDay, LEtotal, LEremain, LEday;
	var timer, tdnum, daytime, dayhour, daysecond, daymin;
	var particleCount = 0;

	myNow = new Date();
	myBirth = new Date(0000, 0, 0);
	//targetdate = myNow.getFullYear()*10000 + (myNow.getMonth()+1)*100 + 1 * myNow.getDate();
	//targetdate2 = myNow.getFullYear()*10000 + (myBirth.getMonth()+1)*100 + 1 * myBirth.getDate();


	function myLE(event){

		//変数定義
		q1 = $("#target input[name=gender]:checked").val();
		q2_1 = $("#target input[name=myBy]").val();
		q2_2 = $("#target input[name=myBm]").val();
		q2_3 = $("#target input[name=myBd]").val();
		q3 = $("#target input[name=place]:checked").val();
		q4 = $("#target input[name=university]:checked").val();
		q5 = $("#target input[name=graduate]:checked").val();
		q6 = $("#target input[name=income]:checked").val();
		q7 = $("#target input[name=work]:checked").val();
		q8 = $("#target input[name=grand]:checked").val();
		q9 = $("#target input[name=grand2]:checked").val();
		q10 = $("#target input[name=live]:checked").val();
		q11 = $("#target input[name=alone]:checked").val();
		q12 = $("#target input[name=work2]:checked").val();
		q13 = $("#target input[name=gender]:checked").val();
		q14 = $("#target input[name=exercise]:checked").val();
		q15 = $("#target input[name=sleep]:checked").val();
		q16 = $("#target input[name=happy]:checked").val();
		q17 = $("#target input[name=personality]:checked").val();
		q18 = $("#target input[name=cigarette]:checked").val();
		q19 = $("#target input[name=medical]:checked").val();
		q20_1 = $("#target input[name=myHe]").val();
		q20_2 = $("#target input[name=myWe]").val();

		/* LE計算 */
		myNow = new Date();
		myBirth = new Date(q2_1, q2_2-1, q2_3);
		myMsec = myNow.getTime() - myBirth.getTime();
		myDay = Math.floor(myMsec / (1000*60*60*24));
		LEnow = Math.floor(myMsec / 400000000);

		//現年齢
		myBirth2 = 10000*q2_1 + 100*q2_2 + 1*q2_3;
		targetdate = myNow.getFullYear()*10000 + (myNow.getMonth()+1)*100 + myNow.getDate();
		myOld = Math.floor((targetdate-myBirth2)/10000);
		targetdate2 = myNow.getFullYear()*10000 + (myBirth.getMonth()+1)*100 + 1 * myBirth.getDate();

		//question1
		if(q1 == 'male'){
			myLast = 79;
		}else if(q1 == 'female'){
			myLast = 86;
		}

		//question2
		if(myOld>=30 && myOld<40){
			myLast += 2;
		}else if(myOld>=40 && myOld<50){
			myLast += 3;
		}else if(myOld>=50 && myOld<70){
			myLast += 4;
		}else if(myOld >= 70){
			myLast += 5;
		}else{
			myLast += 0;
		}

		//question3
		if(q3 == 'val1'){
			myLast += 2;
		}else if(q3 == 'val2'){
			myLast -= 2;
		}else if(q3 == 'val3'){
			myLast += 0;
		}

		//question4
		if(q4 == 'yes'){
			myLast += 1;
		}else if(q4 == 'no'){
			myLast += 0;
		}

		//question5
		if(q5 == 'yes'){
			myLast += 2;
		}else if(q5 == 'no'){
			myLast += 0;
		}

		//question6
		if(q6 == 'yes'){
			myLast -= 2;
		}else if(q6 == 'no'){
			myLast += 0;
		}

		//question7
		if(q7 == 'yes' && myOld >= 65){
			myLast += 3;
		}else if(q7 == 'no'){
			myLast += 0;
		}

		//question8
		if(q8 == 'yes'){
			myLast += 2;
		}else if(q8 == 'no'){
			myLast += 0;
		}

		//question9
		if(q9 == 'yes'){
			myLast += 6;
		}else if(q9 == 'no'){
			myLast += 0;
		}

		//question10
		if(q10 == 'yes'){
			myLast -= 4;
		}else if(q10 == 'no'){
			myLast += 0;
		}

		//question11
		if(q11 == 'yes'){
			myLast += 5;
		}else if(q11 == 'no'){
			myLast -= 1;
		}

		//question12
		if(q12 == 'val1'){
			myLast -= 1;
		}else if(q12 == 'val2'){
			myLast -= 2;
		}else if(q12 == 'val3'){
			myLast -= 3;
		}else if(q12 == 'val4'){
			myLast += 0;
		}

		//question13
		if(q13 == 'val1' || q13 == 'val2'){
			myLast += 3;
		}else if(q13 == 'val3'){
			myLast -= 3;
		}else if(q13 == 'val4'){
			myLast += 0;
		}

		//question14
		if(q14 == 'val1'){
			myLast += 4;
		}else if(q14 == 'val2'){
			myLast += 2;
		}else if(q14 == 'val3'){
			myLast += 0;
		}

		//question15
		if(q15 == 'yes'){
			myLast -= 4;
		}else if(q15 == 'no'){
			myLast += 0;
		}

		//question16
		if(q16 == 'yes'){
			myLast += 1;
		}else if(q16 == 'no'){
			myLast -= 1;
		}

		//question17
		if(q16 == 'val1'){
			myLast += 3;
		}else if(q16 == 'val2'){
			myLast -= 3;
		}

		//question18
		if(q18 == 'val1'){
			myLast -= 8;
		}else if(q18 == 'val2'){
			myLast -= 6;
		}else if(q18 == 'val3'){
			myLast -= 3;
		}else if(q18 == 'val4'){
			myLast += 0;
		}

		//question19
		if(q19 == 'yes' && myOld >= 40){
			myLast += 2;
		}else if(q19 == 'no'){
			myLast += 0;
		}

		//question20
		var normalWeight = (q20_1-100)*0.9;
		var diffWeight = q20_2 - normalWeight;
		if(diffWeight >= 25){
			myLast -= 8;
		}else if(diffWeight >= 15 && diffWeight < 25){
			myLast -= 4;
		}else if(diffWeight >= 5 && diffWeight < 15){
			myLast -= 2;
		}else{
			myLast += 0;
		}

		//トータルLE
		myBirth3 = new Date(q2_1*1+myLast, q2_2-1, q2_3);
		totalMsec = myBirth3.getTime() - myBirth.getTime();
		totalDay = Math.floor(totalMsec / (1000*60*60*24));
		LEtotal = Math.floor(totalMsec / 400000000);
		//↑400000000はエネルギー桁数調整用の係数

		//残りLE
		LEremain = LEtotal - LEnow;

		//一日のLE
		LEday = LEtotal / totalDay;

		//パーティクル数
		particleCount = myLast - myOld + 1;

		//出力(仮)
		//$(".result1").text('消費LE : ' + LEnow);
		//$(".result2").text('トータルLE : ' + LEtotal);
		//$(".result3").text('残りLE : ' + LEremain);
		//$(".result4").text('1日のLE : ' + LEday);
		//$(".result5").text('パーティクル数 : ' + perticleNumber);
		//$(".result6").text('現年齢 : ' + myOld);
		//$(".result7").text('想定寿命 : ' + myLast);
		//$(".result8").text('標準体重 : ' + normalWeight);
		//$(".result9").text('体重差分 : ' + diffWeight);

		//シーン２：メインパーティクル
		scene2 = new THREE.Scene();
			//形状オブジェクトの生成
			geometry2 = new THREE.Geometry();
			//geometry2 = new THREE.BoxGeometry( 200, 200, 200, 16, 16, 16 );
			texture2 = THREE.ImageUtils.loadTexture( "textures/star2.png" );

			/*particleNo = [];

			for ( i = 0; i < particleCount; i++){
				particleNo.push(i);
				particleNo[i].name="箱";
			}*/

			//console.log(particleNo[3].name);

			//depthTest:前後関係を取る
			materials2 = new THREE.SpriteMaterial( { map: texture2, depthTest: false, transparent: true} );
			materials2.blending = THREE.AdditiveBlending;
			materials2.color.setHSL(0.85, 1, 0.9);
			//materials2.opacity = 1.0;

			for ( i = 0; i < particleCount; i ++ ) {

				//頂点座標、pointcloudだとrayの当たり判定がピンポイントのためspritematerialで作る。
				//var vertex2 = new THREE.Vector3();
				//球内パーティクル均等分布
				var r2 = Math.cbrt(Math.random());
				var cosTheta2 = Math.random() * 2 - 1;
				var sinTheta2 = Math.sqrt(1- cosTheta2*cosTheta2);
				var phi2 = Math.random() * 2 * Math.PI; 

				if( i==0 ){
					//vertex2.x = 0;
					//vertex2.y = 0;
					//vertex2.z = 0;
					//geometry2.vertices.push( vertex2 );
					particles2[i] = new THREE.Sprite( materials2 );
					particles2[i].position.set(10, 10, 10);
					particles2[i].scale.set(700, 700, 1);
					scene2.add( particles2[i] );
					if(targetdate <= targetdate2){
						particles2[i].name = (myNow.getFullYear() + i) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}else{
						particles2[i].name = (myNow.getFullYear() + i + 1) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}
					rayReceiveParticles.push( particles2[i] );
				}else{
					//vertex2.x = r2 * sinTheta2 * Math.cos(phi2) * 1000;
					//vertex2.y = r2 * sinTheta2 * Math.sin(phi2) * 1000;
					//vertex2.z = r2 * cosTheta2 * 1000;
					//geometry2.vertices.push( vertex2 );
					particles2[i] = new THREE.Sprite( materials2 );
					particles2[i].position.set(r2 * sinTheta2 * Math.cos(phi2) * 6000, r2 * sinTheta2 * Math.sin(phi2) * 6000, r2 * cosTheta2 * 6000);
					particles2[i].scale.set(700, 700, 1);
					scene2.add( particles2[i] );
					if(targetdate <= targetdate2){
						particles2[i].name = (myNow.getFullYear() + i) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}else{
						particles2[i].name = (myNow.getFullYear() + i + 1) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}
					rayReceiveParticles.push( particles2[i] );
				}
			}

			scene.add( scene2 );

			$(".meter1").text(LEremain);
			$(".meter2").text("/" + LEtotal);

			//HPメーター widthmax = 100%
			var meter = (LEremain / LEtotal) * 100;
			$(".metergage-in").css({
				'width': meter + '%'
			});

		};

		function showModal(event){
			event.preventDefault();

		//モーダル背景
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal);

		//モーダルx座標
		var $modalWin = $('#modal-win');
		/*$window = $(window);
		var posX = ($window.width() - $modalWin.outerWidth()) / 2;*/

		$modalWin
		.before($shade)
		/*.css({left: posX})*/
		.removeClass('hide')
		.addClass('show')
		.on('click', '.modal-close', function(){
			hideModal();
		});
	};

	function hideModal(){
		$('#shade').remove();
		$('#modal-win')
		.removeClass('show')
		.addClass('hide');
	};

	//モーダル表示クリックイベント
	$('.show-modal').on('click', showModal);

	//LE算出クリックイベント
	$("#calLe").on('click', function(){
		scene.remove( scene2 );
		myLE();
		console.log(particleNo);
		hideModal();
	});

	//一日分の残エネルギー表示部分
	$(window).load(function(){
		daytime = new Date();
		daysecond = daytime.getSeconds();
		daymin = daytime.getHours()*60 + daytime.getMinutes();
		tdnum = 100 - (100/1440) * daymin;
		$(".tdnum").text(tdnum.toFixed(2));
	});

	$(window).load(function(){
		timer = setInterval(function(){
			daytime = new Date();
			daysecond = daytime.getSeconds();
			dayhour = daytime.getHours();
			if(daysecond==0){
				daymin = daytime.getHours()*60 + daytime.getMinutes();
				tdnum = 100 - (100/1440) * daymin;
				$(".tdnum").text(tdnum.toFixed(2));
			}else if(dayhour==0 && daysecond==0){
				scene.remove( scene2 );
				myLE();
			}
		}, 1000);
	});

/*myNow = new Date();
		myBirth = new Date(q2_1, q2_2-1, q2_3);
		myMsec = myNow.getTime() - myBirth.getTime();
		myDay = Math.floor(myMsec / (1000*60*60*24));
		LEnow = Math.floor(myMsec / 400000000);*/

////////////
//three.js
////////////
var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, texture, size;
var mesh;
var scene2, particles2 = [], rayReceiveParticles = [], geometry2, materials2, parameters2, h2, color2, texture2, size2, particleNo;
var scene3, sky, sunSphere, effectController, distance;
var inclination = 0.49;

var scene4, renderer2;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var group, text, plane;

var pointLight;

var delta = 1, clock = new THREE.Clock();

var heartShape, particleCloud, sparksEmitter, emitterPos;
var _rotation = 0;
var timeOnShapePath = 0;

var composer;
var effectBlurX, effectBlurY, hblur, vblur;

var cameradistance;

	//three.js初期化関数
	function init() {

		//レンダラーオブジェクトの生成
		renderer = new THREE.WebGLRenderer({alpha: true});
		renderer.setPixelRatio( window.devicePixelRatio );
		//レンダラーのサイズの設定
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor(0x000000, 1.0);
		//stageにcanvas要素を追加
		canvasStage = document.getElementById('stage');
		canvasStage.appendChild( renderer.domElement );

		
		//カメラの設定
			//カメラオブジェクトの生成
			camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000000 );
			//カメラの位置の設定
			camera.position.z = 15000;

			//カメラの上ベクトルの設定
			//camera.up.set(0, 0, 1);
			//カメラの中心位置ベクトルの設定
			//camera.lookAt({ x: 0, y: 0, z: 0 }); //トラックボール利用時は自動的に無効

			//トラックボールオブジェクトの宣言
			trackball = new THREE.TrackballControls(camera, canvasStage);
			trackball.minDistance = 50;
			trackball.maxDistance = 24000;

			//トラックボール動作範囲のサイズとオフセットの設定
			trackball.screen.width = window.innerWidth;                        //横幅
			trackball.screen.height = window.innerHeight;                      //縦幅
			trackball.screen.offsetLeft = canvasStage.getBoundingClientRect().left;  //左オフセット
			trackball.screen.offsetTop = canvasStage.getBoundingClientRect().top;    //右オフセット

			//トラックボールの回転無効化と回転速度の設定
			trackball.noRotate = false;
			trackball.rotateSpeed = 4.0;

			//トラックボールの拡大無効化と拡大速度の設定
			trackball.noZoom = false;
			trackball.zoomSpeed = 4.0;

			//トラックボールのカメラ中心移動の無効化と中心速度の設定
			trackball.noPan = false;
			trackball.panSpeed = 1.0;
			trackball.target = new THREE.Vector3(0, 0, 0);

			//trackball.minDistance = 200;
			//trackball.maxDistance = 500;

			//トラックボールのスタティックムーブの有効化
			trackball.staticMoving = true;
			//トラックボールのダイナミックムーブ時の減衰定数
			trackball.dynamicDampingFactor = 0.3;

		//シーンの設定
			//シーンオブジェクトの生成
			scene = new THREE.Scene();
			//
			scene.fog = new THREE.Fog( 0x000000, 10, 25000 );

			var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
			directionalLight.position.set( 0, -1, 1 );
			directionalLight.position.normalize();
			scene.add( directionalLight );

			pointLight = new THREE.PointLight( 0xffffff, 2, 300 );
			pointLight.position.set( 0, 0, 0 );
			scene.add( pointLight );

		//オブジェクトの設定

			//軸オブジェクトの生成
			//axis = new THREE.AxisHelper(100);
			//軸オブジェクトのシーンへの追加
			//scene.add(axis);

			//シーン１：ダミーパーティクル
			scene1 = new THREE.Scene();
			//形状オブジェクトの生成
			geometry = new THREE.Geometry();
			//テクスチャ画像
			texture = THREE.ImageUtils.loadTexture( "textures/star2.png" );

			//オブジェクトの数,xyz座標（ダミーパーティクル）
			for ( i = 0; i < 1500000; i ++ ) {

				var vertex = new THREE.Vector3();
				var r = Math.cbrt(Math.random());
				var cosTheta = Math.random() * 2 - 1;
				var sinTheta = Math.sqrt(1- cosTheta*cosTheta);
				var phi = Math.random() * 2 * Math.PI; 

				vertex.x = r * sinTheta * Math.cos(phi) * 24000;
				vertex.y = r * sinTheta * Math.sin(phi) * 24000;
				vertex.z = r * cosTheta * 24000;

				geometry.vertices.push( vertex );

			}

			//HSL値
			parameters = [
			[ [1, 1, 0.8], 30 ],
			[ [0.9, 1, 0.8], 20 ],
			[ [0.8, 1, 0.8], 18 ],
			[ [0.7, 1, 0.8], 16 ],
			[ [0.6, 1, 0.8], 14 ]
			];

			for ( i = 0; i < parameters.length; i ++ ) {

				color = parameters[i][0];
				size  = parameters[i][1];

				materials[i] = new THREE.PointCloudMaterial( { size: size, map: texture, depthTest: false} );
				materials[i].transparent = true;
				materials[i].blending = THREE.AdditiveBlending;

				particles = new THREE.PointCloud( geometry, materials[i] );

				particles.rotation.x = Math.random() * 0.02;
				particles.rotation.y = Math.random() * 0.02;
				particles.rotation.z = Math.random() * 0.02;

				scene1.add( particles );
				scene.add( scene1 );
				
			}

	 		//シーン２：メインパーティクル
	 		scene2 = new THREE.Scene();
			//形状オブジェクトの生成
			geometry2 = new THREE.Geometry();
			//geometry2 = new THREE.BoxGeometry( 200, 200, 200, 16, 16, 16 );
			texture2 = THREE.ImageUtils.loadTexture( "textures/star2.png" );

			/*particleNo = [];

			for ( i = 0; i < particleCount; i++){
				particleNo.push(i);
				particleNo[i].name="箱";
			}*/

			//console.log(particleNo[3].name);

			materials2 = new THREE.SpriteMaterial( { map: texture2, depthTest: false, transparent: true} );
			materials2.blending = THREE.AdditiveBlending;
			materials2.color.setHSL(0.85, 1, 0.9);
			//materials2.opacity = 1.0;

			for ( i = 0; i < particleCount; i ++ ) {

				//頂点座標、pointcloudだとrayの当たり判定がピンポイントのためspritematerialで作る。
				//var vertex2 = new THREE.Vector3();
				var r2 = Math.cbrt(Math.random());
				var cosTheta2 = Math.random() * 2 - 1;
				var sinTheta2 = Math.sqrt(1- cosTheta2*cosTheta2);
				var phi2 = Math.random() * 2 * Math.PI; 

				if( i==0 ){
					//vertex2.x = 0;
					//vertex2.y = 0;
					//vertex2.z = 0;
					//geometry2.vertices.push( vertex2 );
					particles2[i] = new THREE.Sprite( materials2 );
					particles2[i].position.set(10, 10, 10);
					particles2[i].scale.set(700, 700, 1);
					scene2.add( particles2[i] );
					if(targetdate <= targetdate2){
						particles2[i].name = (myNow.getFullYear() + i) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}else{
						particles2[i].name = (myNow.getFullYear() + i + 1) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}
					rayReceiveParticles.push( particles2[i] );
				}else{
					//vertex2.x = r2 * sinTheta2 * Math.cos(phi2) * 1000;
					//vertex2.y = r2 * sinTheta2 * Math.sin(phi2) * 1000;
					//vertex2.z = r2 * cosTheta2 * 1000;
					//geometry2.vertices.push( vertex2 );
					particles2[i] = new THREE.Sprite( materials2 );
					particles2[i].position.set(r2 * sinTheta2 * Math.cos(phi2) * 6000, r2 * sinTheta2 * Math.sin(phi2) * 6000, r2 * cosTheta2 * 6000);
					particles2[i].scale.set(700, 700, 1);
					scene2.add( particles2[i] );
					if(targetdate <= targetdate2){
						particles2[i].name = (myNow.getFullYear() + i) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}else{
						particles2[i].name = (myNow.getFullYear() + i + 1) + "." + ( myBirth.getMonth() + 1 ) + "." + myBirth.getDate();
					}
					rayReceiveParticles.push( particles2[i] );
				}
			}
			
			scene.add( scene2 );

		// lights

				// lens flares

				/*var textureFlare0 = THREE.ImageUtils.loadTexture( "textures/lensflare0.png" );
				//var textureFlare2 = THREE.ImageUtils.loadTexture( "textures/lensflare2.png" );
				var textureFlare3 = THREE.ImageUtils.loadTexture( "textures/lensflare3.png" );

				addLight( 0.55, 0.9, 0.9, 5000, 0, -1000 );
				//addLight( 0.08, 0.8, 0.5,    0, 0, -1000 );
				//addLight( 0.995, 0.5, 0.9, 5000, 5000, -1000 );

				function addLight( h, s, l, x, y, z ) {

					var light = new THREE.PointLight( 0xffffff, 1.5, 5000 );
					light.color.setHSL( h, s, l );
					light.position.set( x, y, z );
					scene.add( light );

					var flareColor = new THREE.Color( 0xffffff );
					flareColor.setHSL( h, s, l + 0.5 );

					var lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );

					//lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
					//lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
					//lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );

					//lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
					lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
					lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
					lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

					//lensFlare.customUpdateCallback = lensFlareUpdateCallback;
					lensFlare.position.copy( light.position );

					scene.add( lensFlare );

				}*/

				//シーン３：背景
				scene3 = new THREE.Scene();
				initSky();

				//シーン４：中心パーティクル
				scene4 = new THREE.Scene();

				group = new THREE.Group();
				scene4.add( group );
				//scene.add( scene4 );

				var particlesLength = 70000;

				var particles = new THREE.Geometry();

				function newpos( x, y, z ) {

					return new THREE.Vector3( x, y, z );

				}


				var Pool = {

					__pools: [],

					// Get a new Vector

					get: function() {

						if ( this.__pools.length > 0 ) {

							return this.__pools.pop();

						}

						console.log( "pool ran out!" )
						return null;

					},

					// Release a vector back into the pool

					add: function( v ) {

						this.__pools.push( v );

					}

				};


				for ( i = 0; i < particlesLength; i ++ ) {

					particles.vertices.push( newpos( Math.random() * 200 - 100, Math.random() * 100 + 150, Math.random() * 50 ) );
					Pool.add( i );

				}


				// Create pools of vectors

				attributes = {

					size:  { type: 'f', value: [] },
					pcolor: { type: 'c', value: [] }

				};

				var sprite = generateSprite() ;

				texture = new THREE.Texture( sprite );
				texture.needsUpdate = true;
				//texture3 = THREE.ImageUtils.loadTexture( "textures/spring_piece.png" );

				uniforms = {

					texture:   { type: "t", value: texture }

				};

				// PARAMETERS

				// Steadycounter
				// Life
				// Opacity
				// Hue Speed
				// Movement Speed

				function generateSprite() {

					var canvas = document.createElement( 'canvas' );
					canvas.width = 128;
					canvas.height = 128;

					var context = canvas.getContext( '2d' );

					context.beginPath();
					context.arc( 64, 64, 60, 0, Math.PI * 2, false) ;

					context.lineWidth = 0.5; //0.05
					context.stroke();
					context.restore();

					var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );

					gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
					gradient.addColorStop( 0.2, 'rgba(255,255,255,1)' );
					gradient.addColorStop( 0.4, 'rgba(200,200,200,1)' );
					gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

					context.fillStyle = gradient;

					context.fill();

					return canvas;

				}

				var shaderMaterial = new THREE.ShaderMaterial( {

					uniforms: uniforms,
					attributes: attributes,

					vertexShader: document.getElementById( 'vertexshader' ).textContent,
					fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

					blending: THREE.AdditiveBlending,
					depthWrite: false,
					transparent: true,

				});

				particleCloud = new THREE.PointCloud( particles, shaderMaterial );

				var vertices = particleCloud.geometry.vertices;
				var values_size = attributes.size.value;
				var values_color = attributes.pcolor.value;

				for( var v = 0; v < vertices.length; v ++ ) {

					values_size[ v ] = 50;

					values_color[ v ] = new THREE.Color( 0x000000 );

					particles.vertices[ v ].set( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY );

				}

				group.add( particleCloud );
				//particleCloud.y = 0;


				// Create Particle Systems

				// EMITTER STUFF

				// Heart

				//var x = 0, y = 0;

				//heartShape = new THREE.Shape();

				//heartShape.moveTo( x + 25, y + 25 );
				//heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
				//heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
				//heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
				//heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
				//heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
				//heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );

				var hue = 0;

				var setTargetParticle = function() {

					var target = Pool.get();
					values_size[ target ] = Math.random() * 50;

					return target;

				};

				var onParticleCreated = function( p ) {

					var position = p.position;
					p.target.position = position;

					var target = p.target;

					if ( target ) {

						// console.log(target,particles.vertices[target]);
						// values_size[target]
						// values_color[target]

						hue += 0.0003 * delta;
						if ( hue > 1 ) hue -= 1;

						// TODO Create a PointOnShape Action/Zone in the particle engine

						//timeOnShapePath += 0.00035 * delta;
						//if ( timeOnShapePath > 1 ) timeOnShapePath -= 1;

						//var pointOnShape = heartShape.getPointAt( timeOnShapePath );

						emitterpos.x = 0;//pointOnShape.x * 5 - 100;
						emitterpos.y = 0;//-pointOnShape.y * 5 + 400;

						// pointLight.position.copy( emitterpos );
						pointLight.position.x = emitterpos.x;
						pointLight.position.y = emitterpos.y;
						pointLight.position.z = 100;

						particles.vertices[ target ] = p.position;

						values_color[ target ].setHSL( hue, 0.6, 0.1 );

						pointLight.color.setHSL( hue, 0.8, 0.5 );


					};

				};

				var onParticleDead = function( particle ) {

					var target = particle.target;

					if ( target ) {

						// Hide the particle

						values_color[ target ].setRGB( 0, 0, 0 );
						particles.vertices[ target ].set( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY );

						// Mark particle system as available by returning to pool

						Pool.add( particle.target );

					}

				};

				var engineLoopUpdate = function() {

				};


				sparksEmitter = new SPARKS.Emitter( new SPARKS.SteadyCounter( 150 ) );

				emitterpos = new THREE.Vector3( 0, 0, 0 );

				sparksEmitter.addInitializer( new SPARKS.Position( new SPARKS.PointZone( emitterpos ) ) );
				sparksEmitter.addInitializer( new SPARKS.Lifetime( 1, 7 ));
				sparksEmitter.addInitializer( new SPARKS.Target( null, setTargetParticle ) );


				sparksEmitter.addInitializer( new SPARKS.Velocity( new SPARKS.PointZone( new THREE.Vector3( 0, 0, 0 ) ) ) );

				sparksEmitter.addAction( new SPARKS.Age() );
				sparksEmitter.addAction( new SPARKS.Accelerate( 0, 5, 0 ) );
				sparksEmitter.addAction( new SPARKS.Move() );
				sparksEmitter.addAction( new SPARKS.RandomDrift( 200, 200, 200 ) );


				sparksEmitter.addCallback( "created", onParticleCreated );
				sparksEmitter.addCallback( "dead", onParticleDead );
				sparksEmitter.start();

				// End Particles

				/*renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				container.appendChild( stats.domElement );*/

				//レンダラーオブジェクトの生成
				/*renderer2 = new THREE.WebGLRenderer({alpha: true});
				renderer2.setPixelRatio( window.devicePixelRatio );
				//レンダラーのサイズの設定
				renderer2.setSize( window.innerWidth, window.innerHeight );
				renderer2.setClearColor(0x000000, 1.0);*/

				// POST PROCESSING

				var effectFocus = new THREE.ShaderPass( THREE.FocusShader );

				var effectCopy = new THREE.ShaderPass( THREE.CopyShader );
				effectFilm = new THREE.FilmPass( 0.5, 0.25, 2048, false );

				var shaderBlur = THREE.TriangleBlurShader;
				effectBlurX = new THREE.ShaderPass( shaderBlur, 'texture' );
				effectBlurY = new THREE.ShaderPass( shaderBlur, 'texture' );

				var radius = 15;
				var blurAmountX = radius / window.innerWidth;
				var blurAmountY = radius / window.innerHeight;

				hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
				vblur = new THREE.ShaderPass( THREE.VerticalBlurShader);

				hblur.uniforms[ 'h' ].value =  0.2 / window.innerWidth;
				vblur.uniforms[ 'v' ].value =  0.2 / window.innerHeight;

				effectBlurX.uniforms[ 'delta' ].value = new THREE.Vector2( blurAmountX, 0 );
				effectBlurY.uniforms[ 'delta' ].value = new THREE.Vector2( 0, blurAmountY );

				effectFocus.uniforms[ 'sampleDistance' ].value = 0.99; //0.94
				effectFocus.uniforms[ 'waveFactor' ].value = 0.003;  //0.00125

				var renderScene = new THREE.RenderPass( scene, camera );

				composer = new THREE.EffectComposer( renderer );
				composer.addPass( renderScene );
				composer.addPass( hblur );
				composer.addPass( vblur );
				// composer.addPass( effectBlurX );
				// composer.addPass( effectBlurY );
				// composer.addPass( effectCopy );
				// composer.addPass( effectFocus );
				// composer.addPass( effectFilm );

				vblur.renderToScreen = true;
				effectBlurY.renderToScreen = true;
				effectFocus.renderToScreen = true;
				effectCopy.renderToScreen = true;
				effectFilm.renderToScreen = true;

				canvasStage.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//canvasStage.addEventListener( 'touchstart', onDocumentTouchStart, false );
				//canvasStage.addEventListener( 'touchmove', onDocumentTouchMove, false );

				window.addEventListener( 'resize', onWindowResize, false );

				animate();
			}

			function onDocumentMouseMove( event ) {
			//イベントの伝播の無効化
			event.preventDefault();
			//マウスポインタの位置座標の取得
			var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			var pos = new THREE.Vector3(mouseX, mouseY, 0.5);

			//プロジェクターオブジェクトの生成
			var projector = new THREE.Projector();
			//逆投影変換を行うことで仮想空間内のベクトルへと変換する
			pos = pos.unproject(camera);
			//カメラ位置座標を起点として規格化を行う
			pos = pos.sub( camera.position ).normalize();
			//カメラ位置座標から光線を発射
			var raycaster = new THREE.Raycaster( camera.position, pos );
			//光線と交わるオブジェクトを収集
			var intersects = raycaster.intersectObjects( rayReceiveParticles );
			//交わるオブジェクトが１個以上の場合
			if( cameradistance >= 3000 && intersects.length > 0){
				$('#textYear')
				.html('<span>until </span>' + intersects[0].object.name)
				.fadeIn(1000);
				//最も近いオブジェクトの名前をアラート表示する
			}else if( cameradistance >= 3000 && intersects.length == 0 ){
				$('#textYear').fadeOut(500);
			}
		}

			/*function lensFlareUpdateCallback( object ) {

				var f, fl = object.lensFlares.length;
				var flare;
				var vecX = -object.positionScreen.x * 2;
				var vecY = -object.positionScreen.y * 2;


				for( f = 0; f < fl; f++ ) {

					   flare = object.lensFlares[ f ];

					   flare.x = object.positionScreen.x + vecX * flare.distance;
					   flare.y = object.positionScreen.y + vecY * flare.distance;

					   flare.rotation = 0;

				}

				object.lensFlares[ 2 ].y += 0.025;
				object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );

			}*/

			function initSky(){

				// Add Sky Mesh
				sky = new THREE.Sky();
				scene3.add( sky.mesh );
				scene.add( scene3 );

				// Add Sun Helper
				sunSphere = new THREE.Mesh( new THREE.SphereGeometry( 20000, 30, 30 ),
					new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false, transparent: true, opacity: 0 }));
				sunSphere.position.y = -700000;
				sunSphere.visible = true;
				scene3.add( sunSphere );
				scene.add( scene3 );

				distance = 400000;

				effectController  = {
					turbidity: 10,
					reileigh: 1,
					mieCoefficient: 0.005,
					mieDirectionalG: 0.99,
					luminance: 1.1,
					inclination: 0.50, // elevation / inclination
					azimuth: 0.25, // Facing front,
					sun: !false
				}

				guiChanged();

				camera.lookAt(sunSphere.position);

			}

			function guiChanged(){
				var uniforms = sky.uniforms;
					uniforms.turbidity.value = 10//effectController.turbidity;
					uniforms.reileigh.value = 1//effectController.reileigh;
					uniforms.luminance.value = 1.1//effectController.luminance;
					uniforms.mieCoefficient.value = 0.005//effectController.mieCoefficient;
					uniforms.mieDirectionalG.value = 0.99//effectController.mieDirectionalG;

					var theta = Math.PI * (effectController.inclination - 0.5);
					var phi = 2 * Math.PI * (effectController.azimuth - 0.5);

					sunSphere.position.x = distance * Math.cos(phi);
					sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
					sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);

					//sunSphere.visible = effectController.sun;

					sky.uniforms.sunPosition.value.copy(sunSphere.position);
				}

				function onWindowResize() {

					windowHalfX = window.innerWidth / 2;
					windowHalfY = window.innerHeight / 2;

					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight );

				}

				function animate() {

					trackball.update();

					render();

					requestAnimationFrame( animate );

				}

				function render() {

					var time = Date.now() * 0.00005;

			//camera.position.x += ( mouseX - camera.position.x ) * 0.05;
			//camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

			//camera.lookAt( scene.position );

			for ( i = 0; i < scene1.children.length; i ++ ) {

				var object = scene1.children[ i ];

				if ( object instanceof THREE.PointCloud ) {

					//object.rotation.x = time * ( i < 4 ? i + 1 : - ( i + 1 ) ) * 0.05;
					object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) ) * 0.01;
					object.rotation.z = time * ( i < 4 ? i + 1 : - ( i + 1 ) ) * 0.01;

				}

			}

			for ( i = 0; i < materials.length; i ++ ) {

				color = parameters[i][0];

				h = ( 360 * ( color[0] + time ) % 360 ) / 360;
				materials[i].color.setHSL( h, color[1], color[2] );

				/*if( cameradistance < 7500 ){
					materials[i].opacity = 1.0 - ( 7500 - cameradistance) * 0.0003;
				}else{
					materials[i].opacity = 1.0;
				}*/

			}

			scene2.rotation.z = time * 0.3;
			scene2.rotation.x = time * 0.3;

			particleCloud.geometry.verticesNeedUpdate = true;

			attributes.size.needsUpdate = true;
			attributes.pcolor.needsUpdate = true;

			TWEEN.update();

			//カメラ位置に対する各パラメータ値の変更
			cameradistance = Math.sqrt(camera.position.x*camera.position.x + camera.position.y*camera.position.y + camera.position.z*camera.position.z);

			//カメラ位置に対する、各シーンの表示非表示
			if( cameradistance < 3000 ){
				//scene.remove( scene1 );
				scene.remove( scene2 );
				scene.add( scene4 );
				hblur.uniforms[ 'h' ].value = ( 0.2 + (3000 - cameradistance ) * 0.0001) / window.innerWidth;
				vblur.uniforms[ 'v' ].value = ( 0.2 + (3000 - cameradistance ) * 0.0001) / window.innerHeight;
				$('#textYear')
				.html(myNow.getFullYear() + "." + ( myNow.getMonth() + 1 ) + "." + myNow.getDate())
				.fadeIn(1000);
			}else if( cameradistance >= 3000 ){
				scene.add( scene1 );
				scene.add( scene2 );
				scene.remove( scene4 );
				hblur.uniforms[ 'h' ].value =  0.2 / window.innerWidth;
				vblur.uniforms[ 'v' ].value =  0.2 / window.innerHeight;
			}

			//カメラ位置に対するメインパーティクルの透過率変更
			if( cameradistance < 7000 ){
				materials2.opacity = 1.0 - ( 7000 - cameradistance) * 0.0002;
			}else{
				materials2.opacity = 1.0;
			}

			//カメラ位置に対する太陽?の位置変更
			if( cameradistance < 13000 ){
				effectController.inclination = 0.50 + ( 13000 - cameradistance ) * 0.000002;
			}else if( camera.position.z >= 13000 ){
				effectController.inclination = 0.50;
			}

			guiChanged();

			//クリアーカラーで初期化
			renderer.clear();
			//レンダリング
			//renderer.render( scene, camera );
			composer.render( 0.1 );

			//console.log(cameradistance);
			//console.log(inclination);

		}

		window.addEventListener('load', init, false);

	});

$(function(){
	function showModal2(event){
		event.preventDefault();

		//モーダル背景
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal2);

		//モーダルx座標
		var $modalWin2 = $('#modal-win2');
		/*$window = $(window);
		var posX = ($window.width() - $modalWin2.outerWidth()) / 2;*/

		$modalWin2
		.before($shade)
		/*.css({left: posX})*/
		.removeClass('hide')
		.addClass('show')
		.on('click', '.modal-close', function(){
			hideModal2();
		});
	};

	function hideModal2(){
		$('#shade').remove();
		$('#modal-win2')
		.removeClass('show')
		.addClass('hide');
	};

	//モーダル表示クリックイベント
	$('.show-modal2').on('click', showModal2);
});

$(function (){
	var $modalWin = $('#modal-win3');
	$('.show-modal3').on('click', function(){
		$modalWin.fadeIn(500);
	});
	$('#modal-win3').on('click', function(){
		$modalWin.fadeOut(500);
	});
	$('modal-close').on('click', function(){
		$modal.Win.fadeOut(500);
	})
});