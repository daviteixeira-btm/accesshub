<Code language='html'>
&lt;!-- Código HTML --&gt;
&lt;button onclick='aumentarVolume()'&gt;Aumentar volume&lt;/button&gt;
&lt;button onclick='diminuirVolume()'&gt;Diminuir volume&lt;/button&gt;
&lt;button onclick='toggleMutar()'&gt;Mutar&lt;/button&gt;
&lt;video id="video">&lt;/video&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;
let meuVideo = document.getElementById("video");

function aumentarVolume() {
    if(meuVideo.volume < 1.0){
        meuVideo.volume += 0.1;
    }
}

function diminuirVolume() {
    if(meuVideo.volume > 0.0){
        meuVideo.volume -= 0.1;
    }
}

function toggleMutar() {
    video.muted = !video.muted;
}
&lt;/script&gt;
</Code>
