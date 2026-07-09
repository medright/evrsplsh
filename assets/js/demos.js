(function () {
	"use strict";

	const params = new URLSearchParams(window.location.search);
	const video = document.querySelector("video[data-demo-video]");
	const requestedTime = Number(params.get("t"));

	if (video && Number.isFinite(requestedTime) && requestedTime >= 0) {
		video.addEventListener("loadedmetadata", function () {
			video.currentTime = Math.min(requestedTime, Math.max(0, video.duration - 0.25));
		});
	}

	document.querySelectorAll("[data-video-time]").forEach(function (button) {
		button.addEventListener("click", function () {
			if (!video) return;
			video.currentTime = Number(button.getAttribute("data-video-time")) || 0;
			video.focus();
			video.play().catch(function () {});
		});
	});

	const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
	document.querySelectorAll("a.campaign-link").forEach(function (link) {
		const url = new URL(link.href, window.location.href);
		campaignKeys.forEach(function (key) {
			if (params.get(key) && !url.searchParams.get(key)) {
				url.searchParams.set(key, params.get(key));
			}
		});
		link.href = url.toString();
	});

	document.querySelectorAll("[data-current-year]").forEach(function (node) {
		node.textContent = String(new Date().getFullYear());
	});
})();
