import slugify from 'slugify';

export function slugifyString(text: string, replacement = '-'): string {
    if ( ! text) return text;
    let slugified = slugify(text, {
        lower: true,
        replacement,
        remove: /[*+~.()'"!:@?/]/g,
    });
    // some chinese text might not get slugified properly,
    // just replace whitespace with dash in that case
    if ( ! slugified) {
        slugified = text.replace(/\s+/g, '-').toLowerCase();
    }
    return slugified;
}