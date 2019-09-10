
'use strict';

module.exports = async (markdown, options) => {
    const mappings = [
        {
            pattern: /^\s*\* /,
            replace: '$&@F '
        },
        {
            pattern: /@(?:F|fragment)\b/g,
            replace: '<!-- .element: class="fragment" -->'
        },
        {
            pattern: /@tiny-slide\b/g,
            replace: '<!-- .slide: class="tiny-slide" -->'
        },
        {
            pattern: /@small-slide\b/g,
            replace: '<!-- .slide: class="small-slide" -->'
        },
        {
            pattern: /@medium-slide\b/g,
            replace: '<!-- .slide: class="medium-slide" -->'
        },
        {
            pattern: /@(?:SS|slide-speech)\b/g,
            replace: '<script type="text/speech" class="slide-speech">'
        },
        {
            pattern: /@\/(?:SS|slide-speech)\b/g,
            replace: '</script>'
        },
        {
            pattern: /@(?:S|speech)(?:\[([^\]]*)\])/g,
            replace: '<script type="text/speech" class="part-speech">$1</script>'
        },
        {
            pattern: /@(?:SC|speech-copy)\b/g,
            replace: '<script type="text/speech" class="part-speech speech-copy"></script>'
        },
        {
            pattern: /@block\[([^\]]+)\]\b/g,
            replace: '<div $1>'
        },
        {
            pattern: /@\/block\b/g,
            replace: '</div>'
        }
    ];
    return markdown
        .split('\n')
        .map(line => {
            for (let { pattern, replace } of mappings) {
                line = line.replace(pattern, replace);
            }
            return line;
        })
        .join('\n');
};
