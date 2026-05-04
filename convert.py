import re
import sys

def html_to_jsx(html):
    html = re.sub(r'\bclass=', 'className=', html)
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    html = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html)
    html = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html)
    html = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'fill-rule', 'fillRule', html)
    html = re.sub(r'clip-rule', 'clipRule', html)
    html = re.sub(r'clip-path', 'clipPath', html)
    html = re.sub(r'stroke-width', 'strokeWidth', html)
    html = re.sub(r'stroke-linecap', 'strokeLinecap', html)
    html = re.sub(r'stroke-linejoin', 'strokeLinejoin', html)
    return html

file_names = {
    'index.html': 'src/pages/Home.jsx',
    'about.html': 'src/pages/About.jsx',
    'contact.html': 'src/pages/Contact.jsx'
}

for html_file, jsx_file in file_names.items():
    with open(f'../{html_file}', 'r') as f:
        text = f.read()

    match = re.search(r'</header>(.*?)<footer', text, re.DOTALL | re.IGNORECASE)
    if match:
        body_html = match.group(1)
        body_jsx = html_to_jsx(body_html)
        
        name = jsx_file.split('/')[-1].replace('.jsx', '')
        
        with open(jsx_file, 'w') as out:
            out.write('import { Link } from "react-router-dom";\n\n')
            out.write(f'const {name} = () => {{\n')
            out.write('  return (\n')
            out.write('    <>\n')
            out.write(body_jsx + '\n')
            out.write('    </>\n')
            out.write('  );\n')
            out.write('};\n\n')
            out.write(f'export default {name};\n')
        print(f"Processed {html_file} -> {jsx_file}")
    else:
        print(f"Body not found for {html_file}")
