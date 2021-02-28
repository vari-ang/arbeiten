import auth from '../firebase/auth'; 
export default {
    methods: {
        uploadPhotos() {
            var vm = this;
            
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    // Only upload photos if there is min 1 selected photo
                    if(vm.imgList.length > 0) {
                        for(var i = 0; i < vm.imgList.length; i++) {
                            // Get each file
                            var img = vm.imgList[i];

                            // Reduce file (image) size
                            const width = 300;
                            const height = 300;
                            const fileName = _.uniqueId(img.name + '_' + Date.now() + '_');
                            const reader = new FileReader();
                            const imgResized = new Image();

                            reader.readAsDataURL(img);
                            reader.onload = event => {
                                imgResized.src = event.target.result;
                                imgResized.onload = () => {
                                        const elem = document.createElement('canvas');
                                        elem.width = width;
                                        elem.height = height;
                                        const ctx = elem.getContext('2d');

                                        // img.width and img.height will give the original dimensions
                                        ctx.drawImage(imgResized, 0, 0, width, height);

                                        const data = ctx.canvas.toDataURL(imgResized, 'image/jpeg', 1);
                                        ctx.canvas.toBlob((blob) => {
                                            const file = new File([blob], fileName, {
                                                type: 'image/jpeg',
                                                lastModified: Date.now()
                                            });

                                            vm.uploadPhotosAsPromise(file);
                                        }, 'image/jpeg', 1);
                                    },
                                reader.onerror = error => console.log(error);
                            };
                        }
                    }
                    else {
                        M.toast(
                            {
                                html: 'Please select one photo or more to upload', 
                                classes: 'red rounded'
                            }
                        );
                    }
                }
                else {
                    // User is signed out.
                    M.toast(
                        {
                            html: 'You have to <a href="/sign-in"><b>&nbsp; Sign In &nbsp;</b></a> first.' +
                                    'Or, <a href="/sign-up"><b>Sign Up</b></a> to create an account.', 
                            classes: 'red rounded'
                        }
                    );
                }
            });

        }
    }
}