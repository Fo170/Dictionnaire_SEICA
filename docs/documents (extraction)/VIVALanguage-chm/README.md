# VIVA Language Dictionary

This dictionary contains the complete reference for the VIVA programming language, extracted from the original `VIVALanguage.chm` help file.

## Structure

The dictionary is organized into the following categories:

1. **[Compiler_Directives](./Compiler_Directives/)** - Instructions that begin with `@` or `DECLARE` keywords, processed by the compiler
2. **[Runtime_Instructions](./Runtime_Instructions/)** - Instructions that begin with `~` or `&` character, executed at runtime
3. **[Examples](./Examples/)** - Practical examples showing usage of various instructions
4. **[Definitions](./Definitions/)** - Definitions of core concepts, data types, and language constructs
5. **[Reference](./Reference/)** - General reference materials and additional information

## Language Overview

The VIVA language is a high-level, structured, proprietary language used for developing functional tests of electronic boards on SEICA test systems. It consists of:

- **Instructions** (compiler directives and run-time instructions)
- **Pattern options**
- **Instrument drivers**

## Key Features

- **Two Programming Environments**:
  - **COMPILED**: For executing test patterns at specific frequencies
  - **RUN-TIME**: For operator interaction, instrument control, and graphic interface handling

- **Syntax Basics**:
  - Command keywords in CAPITAL LETTERS (recommended)
  - Variable names in capital letters (recommended)
  - `!` for end-of-line comments
  - `*` for beginning-of-line comments
  - `;` to end lines
  - `/` to indicate test patterns
  - `&` is an alias for `~`

## Usage

Each file in this dictionary corresponds to a specific instruction, concept, or example from the original help file. Files are named after their original HTML counterparts with `.md` extension.

To find information about a specific instruction:
1. Determine if it's a compiler directive (starts with `@` or `DECLARE`) or runtime instruction (starts with `~`)
2. Look in the appropriate directory
3. Files are named exactly as they appeared in the original help system

## Extraction Notes

This dictionary was automatically extracted from `VIVALanguage.chm` using a conversion process that:
- Preserved all instructional content
- Converted HTML formatting to markdown-equivalent syntax
- Maintained the original file organization and naming conventions
- Categorized content based on filename patterns and directory structure

For the most accurate representation, please refer to the individual markdown files which contain the complete extracted content.

---

*Extracted from VIVALanguage.chm - ©2008 Seica S.p.a - All rights reserved*
