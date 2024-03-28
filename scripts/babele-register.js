Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'wwn-ko',
            lang: 'ko',
            dir: 'localization/compendium/ko'
        });
    }
});
