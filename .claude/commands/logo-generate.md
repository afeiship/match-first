# Logo Generator

## Objective
Create or update project logos in `assets/logo.svg` following the project branding guidelines.

## Steps

### 1. Analyze Project Identity
- Read `package.json` for project name and description
- Review `src/index.ts` to understand core functionality
- Identify key concepts: matching, conditions, branching, selection

### 2. Design Concept
Create visual metaphors for:
- **Branching**: Decision tree, flow paths, multiple routes
- **Selection**: Checkmarks, highlighted paths, first match emphasis
- **Fallback**: Default route, safety net, base case

### 3. Generate SVG Logo
- Create `assets/logo.svg` with modern, clean design
- Use scalable vector graphics for crisp rendering at any size
- Include:
  - Project name or initial letter
  - Visual representation of condition matching
  - Color scheme: Blue/Purple gradient (primary), Green (success), Gray (fallback)
  - Subtle shadows for depth

### 4. Validate
- Ensure SVG is valid and renders correctly
- Test at different sizes (64px, 128px, 256px)
- Verify it looks good in README dark/light modes

## Design Guidelines

| Aspect | Specification |
|--------|---------------|
| **Format** | SVG (scalable vector) |
| **Location** | `assets/logo.svg` |
| **ViewBox** | 240x240 for versatility |
| **Primary Color** | Blue to Purple gradient (#3b82f6 → #8b5cf6) |
| **Success Color** | Green gradient (#22c55e → #10b981) |
| **Style** | Modern flat with subtle shadows |
| **Background** | Light (#f8fafc) for contrast |

## Visual Elements
- **Starting point**: Circle at top (input)
- **Branching lines**: Paths representing condition evaluation
- **First match**: Green checkmark with "1st" label
- **Non-matches**: Gray/dimmed branches with X marks
- **Fallback path**: Bottom "default" box

## Example Usage
```bash
# Given: Project "match-first" for conditional value selection
# Generate: assets/logo.svg showing branching logic with first match highlighted
```
