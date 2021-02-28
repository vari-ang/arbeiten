export default {
    methods: {
        handleImages() {
            // Set image list
            this.imgList = this.$refs.files.files;
            //console.log(this.imgList);

            // Clear previous thumbnails
            $('#preview li').empty();

            // Show tumbnails
            for (var i = 0; i < this.imgList.length; i++) {
                var curr = this.imgList[i];
                
                if (!curr.type.startsWith('image/')) { continue }
                
                var img = document.createElement('img');
                img.classList.add("obj");

                // Style img
                img.width = '300';
                img.height = '250';
                img.style.marginRight = '1em';
                img.style.marginBottom = '2em';
                img.style.border = "2px solid green";

                img.file = curr;

                // Append to preview thumbnail div
                $('#preview li').append(img);
                
                var reader = new FileReader();
                reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
                reader.readAsDataURL(curr);
            }
        }
    }
}