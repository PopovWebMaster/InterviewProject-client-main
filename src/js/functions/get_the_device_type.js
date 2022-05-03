

export const get_the_device_type = () => {

    let typeDevice;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        typeDevice = 'mobile';
    } else {
        typeDevice = 'computer';
    };

    return typeDevice;

};

