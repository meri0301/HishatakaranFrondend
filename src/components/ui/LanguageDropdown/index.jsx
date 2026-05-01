import { memo, useState } from 'react';
import { Globe } from 'lucide-react';

import Dropdown from '../Dropdown';

const LANGUAGES = [
    { value: 'EN', label: 'EN — English' },
    { value: 'HY', label: 'HY — Հայերեն' },
    { value: 'FR', label: 'FR — Français' },
];

const LanguageDropdown = memo(() => {
    const [lang, setLang] = useState('EN');

    return (
        <Dropdown
            items={LANGUAGES}
            value={lang}
            onChange={setLang}
            triggerLabel={lang}
            icon={<Globe size={14} />}
            variant="navbar"
        />
    );
});

LanguageDropdown.displayName = 'LanguageDropdown';

export default LanguageDropdown;
